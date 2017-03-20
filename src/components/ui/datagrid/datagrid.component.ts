import {
    AfterContentInit,
    Component,
    ContentChild,
    ContentChildren,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    QueryList,
    TemplateRef,
} from '@angular/core';
import { deepClone, uuid } from '../../../utils';

import { NtsDatagridColumnComponent } from './column/column.component';
import { NtsDatagridRowDirective } from './row/row-variables.directive';

/**
 *
 * @prop {string} field The key of the filed to sort the dataset
 * @prop {boolean} dir True if ascendent, false if descendent
 * @export
 * @interface NtsDataSort
 */
export interface INtsDataSort { field: string; dir: boolean; };
export interface INtsDataRowEvent { i: number; row: Object; };
export interface INtsDataCellEvent extends INtsDataRowEvent { j: number; column: Object; cell: any; };

/**
 * Table of contents with specified columns and data. Automates sorting, selection and pagination of items
 *
 * @author Alvaro Yuste Torregrosa
 *
 * @export
 * @class NtsDatagridComponent
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
    selector: 'nts-datagrid',
    templateUrl: './datagrid.component.html'
})
export class NtsDatagridComponent implements AfterContentInit, OnChanges {
    /** @lends NtsDatagridComponent */

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
     * A list of the selected items ID's
     * @type {string[]}
     */
    dataSelected: string[] = [];

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
     * The input where de items get into the component
     * @type {Array<object>}
     */
    @Input() data: Array<Object> = null;

    /**
     * The output where changes in the items emitted
     * @event NtsDatagridComponent#dataChange
     * @type {Array<object>}
     */
    @Output() dataChange = new EventEmitter<Array<Object>>();

    /**
     * True if the items can be selected
     * @type boolean
     * @default false
     */
    @Input() selectable = false;

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
     * @event NtsDatagridComponent#pageChange
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
     * @see {@link NtsDataSort}
     * @type {NtsDataSort}
     */
    @Input() sort: INtsDataSort = { field: null, dir: false };

    /**
     *
     * @event NtsDatagridComponent#sortChange
     * @type {INtsDataSort}
     */
    @Output() sortChange: EventEmitter<INtsDataSort> = new EventEmitter<INtsDataSort>();

    /**
     * Specifies if the cells must Cell on hover.
     * This can be overriden at column or cell level.
     * @type boolean
     * @default false
     */
    @Input() highlightCell = false;

    /**
     * Specifies if the cells must Cell on hover.
     * @type boolean
     * @default true
     */
    @Input() highlightRow = true;

    /**
     * Emits an event when a cell is clicked
     *
     * @event NtsDatagridComponent#cellClick
     * @type {INtsDataCellEvent}
     */
    @Output() cellClick: EventEmitter<INtsDataCellEvent> = new EventEmitter<INtsDataCellEvent>();

    /**
     * Emits an event when a row is clicked
     * @event NtsDatagridComponent#rowClick
     * @type {INtsDataRowEvent}
     */
    @Output() rowClick: EventEmitter<INtsDataRowEvent> = new EventEmitter<INtsDataRowEvent>();

    @ContentChildren(NtsDatagridColumnComponent) columnsComponents: QueryList<NtsDatagridColumnComponent> = null;
    @ContentChild(NtsDatagridRowDirective) customRowDirective: NtsDatagridRowDirective = null;
    columns: NtsDatagridColumnComponent[];
    customRow: TemplateRef<Object>;

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
        this.columns = this.columnsComponents.toArray();

        // Sort by the default column
        let sort = null;
        this.columns.forEach(c => {
            if (c.sort === 'asc' || c.sort === 'desc') {
                sort = { column: c, dir: c.sort };
            }
        });
        console.log(this.columns, sort);
        if (sort) { this.onSortBy(sort.column, sort.dir); }

        this.customRow = this.customRowDirective ? this.customRowDirective.templateRef : null;
    }

    /**
     * @param {any} column The field selected to sort the items
     */
    onSortBy(column: NtsDatagridColumnComponent, dir: boolean | 'asc' | 'desc' = null) {
        if (!column || column.sortable === false || column.sortable === undefined && this.sortable === false) { return; }

        if (dir !== null) {
            this.sort = {
                field: column.field,
                dir: dir === 'desc' ? true : dir === 'asc' ? false : dir
            };
        } else if (this.sort.field === column.field) {
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
        this.onPageChange(0);
        this.sortChange.emit(this.sort);
    }

    /**
     * @returns {boolean} True if all the items are selected
     */
    allSelected(): boolean {
        return this.dataSelected.length === this.dataView.length;
    }

    /**
     * Fired when the user clicks on the checkbox of the header
     * Selects or unselects all the items keeping the consistency of the data stores
     *
     * @param {boolean} value If true: select, else: unselect
     */
    onSelectAll(value: boolean) {
        this.dataSelected = value ? [...this.dataView] : [];
        this.dataView.forEach(id => this.dataSource[id].selected = value);
    }

    /**
     * Fired when the user clicks on a checkbox of a row
     * Selects or unselects an items keeping the consistency of the data stores
     *
     * @param {string} id The ID o the item to select/unselect
     * @param {boolean} [value=true] If true: select, else: unselect
     */
    onSelectItem(id: string, value: boolean = true) {
        const index = this.dataSelected.indexOf(id);
        if (value && index === -1) {
            this.dataSelected.push(id);
        } else if (!value && index !== -1) {
            this.dataSelected.splice(index, 1);
        }
        this.dataSource[id].selected = value;
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

    /**
     * Fills the auxiliar data stores (dataView, dataSource and dataSelected) from the variable 'data'.
     *
     * @private
     */
    private updateData() {
        const dataSource = {};
        const dataView = [];
        this.randomIds = false;

        if (this.data && this.data.length) {
            this.data.forEach(el => {
                const id = el['id'] || uuid();
                if (!el['id']) {
                    el['id'] = id;
                    el['randomId'] = true;
                    this.randomIds = true;
                }
                dataView.push(id);
                dataSource[id] = deepClone(el);
            });
        }

        this.dataSelected = [];
        this.dataSource = dataSource;
        this.dataView = dataView;
    }
}
