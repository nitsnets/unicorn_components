import {
    AfterContentInit,
    Component,
    ContentChild,
    ContentChildren,
    EventEmitter,
    HostBinding,
    Input,
    OnChanges,
    Output,
    QueryList,
    TemplateRef,
} from '@angular/core';
import { deepClone, uuid } from '../../../utils';

import { ModalService } from './../../containers/modal/modal.service';
import { Observable } from 'rxjs/Observable';
import { UniDatagridColumnComponent } from './column/column.component';
import { UniDatagridDeleteComponent } from './delete/delete.component';
import { UniDatagridRowDirective } from './row/row-variables.directive';
import { UniFilter } from './../../../models/filter';
import { ViewContainerRef } from '@angular/core';

/**
 *
 * @prop {string} field The key of the filed to sort the dataset
 * @prop {boolean} dir True if ascendent, false if descendent
 * @export
 * @interface UniDataSort
 */
export interface IUniDataSort { field: string; dir: boolean; };
export interface IUniDataRowEvent { i: number; row: Object; };
export interface IUniDataCellEvent extends IUniDataRowEvent { j: number; column: Object; cell: any; };

/**
 * Table of contents with specified columns and data. Automates sorting, selection and pagination of items
 *
 * @author Alvaro Yuste Torregrosa
 *
 * @export
 * @class UniDatagridComponent
 * @emits dataChange
 * @emits sortChange
 * @emits cellClick
 * @emits rowClick
 * @implements {AfterContentInit}
 * @implements {OnChanges}
 * @license NTS-EULA-1
 * @copyright NITSNETS
 */
@Component({
    selector: 'uni-datagrid',
    templateUrl: './datagrid.component.html',
    styleUrls: ['datagrid.component.scss']
})
export class UniDatagridComponent implements AfterContentInit, OnChanges {
    /** @lends UniDatagridComponent */

    @HostBinding('class.uni-datagrid') componentClass = true;
    /**
     * Indicates that the datagrid must execute the operations (sort, pagination, deletion...)
     * locally with the data provided. Else, the datagrid just emits events to delegate the
     * responsability of the operations to its parent; then just waits for the new input of data.
     * @type boolean
     * @default true
     */
    @Input() local = true;

    localSort = null;
    localPage = 0;

    /**
     * A key-value store for the items, in format: {id1: item1, id2: item3, ...}.
     * @type {object}
     */
    dataSource: { [key: string]: any } = {};

    /**
     * An sorted list that represents how the items are rendered
     * @type {string[]}
     */
    dataView: string[] = [];
    /**
     * True if any item has a random generated id
     * @type {boolean}
     * @default false
     */
    randomIds = false;

    /**
     * The field with the unique ID to manage selection and deletion
     *
     * @type {string}
     * @default 'id'
     */
    @Input() idField = 'id';
    /**
     * The input where the items get into the component
     * @type {Array<object>}
     */
    private _data: Array<Object> = null;
    @Input() set data(value: Array<Object>) {
        this._data = value;
        this.updateData();
    };
    get data(): Array<Object> {
        return this._data
    }
    /**
     * The output where changes in the items emitted
     * @event UniDatagridComponent#dataChange
     * @type {Array<object>}
     */
    @Output() dataChange = new EventEmitter<Array<Object>>();

    /***************** SELECTING *****************/
    /**
     * True if the items can be selected
     * @type boolean
     * @default false
     */
    @Input() selectable = false;
    /**
     * A list of the selected items ID's
     * @type {string[]}
     */
    @Input() selected: string[] = [];
    /**
     * Fired when the selected items change
     * @event
     * @type {string[]}
     */
    @Output() selectedChange = new EventEmitter<string[]>();

    /***************** DELETING *****************/
    /**
     * True if the items can be deleted
     * @type boolean
     * @default false
     */
    @Input() deletable = false;
    /**
     * Specifies how a deletion must be confirmed
     *
     * @type {('inline' | 'modal')}
     */
    @Input() deleteConfirm: 'inline' | 'modal' = 'inline';
    /**
     * Fired when the some items are deleted
     * @event
     * @type {string[]}
     */
    @Output() delete = new EventEmitter<string[]>();
    /**
     * True when the items selected are trying to be deleted
     */
    deletingSelection = false;

    /***************** PAGING *****************/
    /**
     * True if the items can be divided in pages
     * @type boolean
     * @default false
     */
    @Input() pageable = false;
    /**
     * The number of items per page
     * @type integer
     * @default 10
     */
    @Input() pageSize = 10;
    /**
     * The current page index
     * @type integer
     * @default 0
     */
    @Input() page = 0;
    /**
     * Emits an event when the user changes the page
     * @event UniDatagridComponent#pageChange
     * @type {number}
     */
    @Output() pageChange = new EventEmitter<number>();
    /**
     * The number of items in total, to manage with pagination in case that this.local is false
     * @see {@link this.local}
     * @type integer
     */
    @Input() totalItems: number;
    /**
     * Returns the last page index
     *
     * @readonly
     */
    get lastPage() {
        return Math.ceil((this.local ? this.dataView.length : this.totalItems) / this.pageSize) - 1;
    }

    /***************** SORTING *****************/
    /**
     * True if the items can be sorted.
     * This can be overriden at column level.
     * @type boolean
     * @default true
     */
    @Input() sortable = true;
    /**
     * The current sort key
     * @prop field
     * @prop dir
     * @see {@link UniDataSort}
     * @type {UniDataSort}
     */
    @Input() sort: IUniDataSort = { field: null, dir: false };
    /**
     *
     * @event UniDatagridComponent#sortChange
     * @type {IUniDataSort}
     */
    @Output() sortChange: EventEmitter<IUniDataSort> = new EventEmitter<IUniDataSort>();

    /***************** FILTERING *****************/
    /**
     *
     */
    @Input() filterable = false;
    @Input() filter: UniFilter;
    @Input() filterFn: Function;

    /***************** VISUALIZATION *****************/
    /**
     * Specifies if the cells must highlight on hover.
     * This can be overriden at column or cell level.
     * @type boolean
     * @default false
     */
    @Input() highlightCell = false;
    /**
     * Specifies if the rows must highlight on hover.
     * @type boolean
     * @default true
     */
    @Input() highlightRow = true;
    /**
     * Specifies if the cells must show column labels.
     * This can be overriden at column or cell level.
     * @type boolean
     * @default false
     */
    @Input() showLabels = false;
    /**
     * Specifies if the header must be visible
     * @type boolean
     * @default true
     */
    @Input() showHeader = true;
    /**
     * Specifies the class to be applied to the rows
     * @type string
     * @default null
     */
    @Input() rowClass: string = null;

    /**
     * Emits an event when a cell is clicked
     *
     * @event UniDatagridComponent#cellClick
     * @type {IUniDataCellEvent}
     */
    @Output() cellClick: EventEmitter<IUniDataCellEvent> = new EventEmitter<IUniDataCellEvent>();
    /**
     * Emits an event when a row is clicked
     * @event UniDatagridComponent#rowClick
     * @type {IUniDataRowEvent}
     */
    @Output() rowClick: EventEmitter<IUniDataRowEvent> = new EventEmitter<IUniDataRowEvent>();

    @ContentChildren(UniDatagridColumnComponent) columnsComponents: QueryList<UniDatagridColumnComponent> = null;
    @ContentChild(UniDatagridRowDirective) customRowDirective: UniDatagridRowDirective = null;
    columns: UniDatagridColumnComponent[];
    customRow: TemplateRef<Object>;

    constructor(
        private modalService: ModalService,
        private viewContainerRef: ViewContainerRef
    ) { }

    ngOnChanges(changes) {
        if (changes.data) { this.updateData(); }

        if (changes.local && !this.local) {
            this.localPage = -1;
            this.localSort = null;
        }
    }
    /**
     * Initialize the children elements got from the content
     */
    ngAfterContentInit() {
        this.columnsComponents.changes.subscribe(
            () => this.columns = this.columnsComponents.toArray()
        );
        this.columns = this.columnsComponents.toArray();
        this.customRow = this.customRowDirective ? this.customRowDirective.templateRef : null;
        this.sortBydefault();
    }
    /**
     * Apply the sort based on the column.sort value
     * *
     * If more than one column specified: the last one will be taken
     */
    sortBydefault() {
        let sort = null;
        this.columns.forEach(c => {
            if (c.sort === 'asc' || c.sort === 'desc') {
                sort = { column: c, dir: c.sort };
            }
        });
        if (sort) { this.onSortBy(sort.column, sort.dir); }
    }
    /**
     * @param {any} column The field selected to sort the items
     */
    onSortBy(column: UniDatagridColumnComponent, dir: boolean | 'asc' | 'desc' = null) {
        if (
            !column
            || column.sortable === false
            || column.sortable === undefined
            && this.sortable === false
        ) { return; }

        if (dir !== null) {
            this.sort = {
                field: column.field,
                dir: dir === 'desc' ? true : dir === 'asc' ? false : dir
            };
        } else if (this.sort && this.sort.field === column.field) {
            if (this.sort.dir) {
                this.sort.field = null;
                this.sort.dir = false;
            } else {
                this.sort.dir = true;
            }
        } else {
            this.sort = {
                field: column.field,
                dir: false
            };
        }
        if (this.local) {
            this.localSort = this.sort.field ? ((this.sort.dir ? '+' : '-') + this.sort.field) : null;
        }
        if (!this.sort.field) {
            this.dataView = [...this.dataView];
        }

        this.onPageChange(0);
        this.sortChange.emit(this.sort);
    }

    /**
     * @returns {boolean} True if all the items are selected
     */
    allSelected(): boolean {
        return this.selected.length === this.dataView.length;
    }
    /**
     * Fired when the user clicks on the checkbox of the header
     * Selects or unselects all the items keeping the consistency of the data stores
     *
     * @param {boolean} value If true: select, else: unselect
     */
    onSelectAll(value: boolean) {
        this.selected = value ? [...this.dataView] : [];
        this.dataView.forEach(id => this.dataSource[id].selected = value);
        if (!this.selected.length) {
            this.deletingSelection = false;
        }
        this.notifySelection();
    }
    /**
     * Fired when the user clicks on a checkbox of a row
     * Selects or unselects an items keeping the consistency of the data stores
     *
     * @param {string} id The ID o the item to select/unselect
     * @param {boolean} [value=true] If true: select, else: unselect
     */
    onSelectItem(id: string, value: boolean = true) {
        const index = this.selected.indexOf(id);
        if (value && index === -1) {
            this.selected.push(id);
        } else if (!value && index !== -1) {
            this.selected.splice(index, 1);
        }
        this.dataSource[id].selected = value;

        if (!this.selected.length) {
            this.deletingSelection = false;
        }
        this.notifySelection();
    }
    notifySelection() {
        if (this.randomIds) {
            this.selectedChange.emit(this.fillIds(this.selected));
        } else { this.selectedChange.emit(this.selected); }
    }

    /**
     * Fired when the user change the current page through the paginator
     *
     * @param {number} page
     */
    onPageChange(page: number) {
        if (this.local) {
            this.localPage = page;
        }
        this.page = page;
        this.pageChange.emit(page);
    }
    openDeleteModal(itemsCount: number = 1): Observable<any> {
        return this.modalService.createModal(
            UniDatagridDeleteComponent,
            { hideHeader: true, itemsCount },
            this.viewContainerRef
        );
    }

    /**
     * Fired when an item selection is confirmed (at the row)
     * @param {string} id
     */
    onDeleteItem(id: string) {
        if (this.randomIds) {
            this.delete.emit([this.fillIds(id)]);
        } else { this.delete.emit([id]); }
        if (this.local) {
            this.deleteLocally([id]);
        }
    }
    /**
     * Fired when the bulk deletion is confirmed (at the header)
     */
    onDeleteSelection() {
        if (!this.deletable || !this.selectable || !this.selected || !this.selected.length) { return; }

        if (this.randomIds) {
            this.delete.emit(this.fillIds(this.selected));
        } else { this.delete.emit(this.selected); }

        if (this.local) {
            this.deleteLocally(this.selected);
            this.deletingSelection = false;
            this.selected = [];
        }
    }
    applyFilter(filter: UniFilter) {
        this.filter = filter;
        this.updateData();
    }
    /**
     * Delete items locally by a given array of IDS
     *
     * @private
     * @param {string[]} ids
     */
    private deleteLocally(ids: string[]) {
        ids.forEach(id => {
            this.dataView.splice(this.dataView.indexOf(id), 1);
            delete this.dataSource[id];
        });
        this.dataView = [...this.dataView];
        this.checkLocalPage();
    }
    private checkLocalPage() {
        if (this.localPage > this.lastPage) {
            this.onPageChange(this.lastPage);
        }
    }
    /**
     * From an ID or an array of IDs returns the object or the array of objects
     *
     * @private
     * @param {(string | string[])} ids
     * @returns {(any | any[])}
     */
    private fillIds(ids: string | string[]): any | any[] {
        if (!ids || !ids.length) { return []; }
        if (Array.isArray(ids)) {
            return ids.map(id => this.dataSource[id]);
        } else { return this.dataSource[ids]; }
    }
    /**
     * Fills the auxiliar data stores (dataView, dataSource and selected) from the variable 'data'.
     *
     * @private
     */
    private updateData(data: Object[] = this.data) {
        const dataSource = {};
        const dataView = [];
        this.randomIds = false;

        if (data && data.length) {
            data.filter(el => {
                if (this.filterable && this.filterFn && this.filter) {
                    return this.filterFn(el, this.filter);
                } else { return true; }
            }).forEach(el => {
                const id = el[this.idField] || uuid();
                if (!el[this.idField]) {
                    el[this.idField] = id;
                    el['randomId'] = true;
                    this.randomIds = true;
                }
                dataView.push(el['id']);
                dataSource[el['id']] = deepClone(el);
            });
        }
        if (this.selected && this.selected.length) {
            this.selected.forEach(id => this.onSelectItem(id, true));
        } else {
            this.selected = [];
        }
        this.dataSource = dataSource;
        this.dataView = dataView;
    }
}
