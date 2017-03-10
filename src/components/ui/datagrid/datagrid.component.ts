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
 * @prop {string} field The key of the filed to order the dataset
 * @prop {boolean} dir True if ascendent, false if descendent
 * @export
 * @interface NtsDataOrder
 */
export interface INtsDataOrder { field: string; dir: boolean; };
export interface INtsDataRowEvent { i: number; row: Object; };
export interface INtsDataCellEvent extends INtsDataRowEvent { j: number; column: Object; cell: any; };

/**
 * Table of contents with specified columns and data. Automates sorting and selection of items
 *
 * @author Alvaro Yuste Torregrosa
 *
 * @export
 * @class NtsDatagridComponent
 * @emits dataChange
 * @emits orderChange
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
     * Indicates that the datagrid must execute the operations (sort, paginate, delete...)
     * locally with the data provided. Else, the datagrid just emits events to delegate the
     * responsability of the operations; then just waits for the new input of data.
     * @type boolean
     * @default true
     */
    @Input() local = true;

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
     * An ordered list that represents how the items are rendered
     * @type {string[]}
     */
    dataView: string[] = [];

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
     * Specifies if the cells must highlight on hover.
     * This can be overriden at column or cell level.
     * @type boolean
     * @default false
     */
    @Input() highlight = false;

    /**
     * True if the items can be selected
     * @type boolean
     * @default false
     */
    @Input() selectable = false;

    /**
     * True if the items can be sorted.
     * This can be overriden at column level.
     * @type boolean
     * @default true
     */
    @Input() sortable = true;

    /**
     * The current order key
     * @prop field
     * @prop dir
     * @see {@link NtsDataOrder}
     * @type {NtsDataOrder}
     */
    @Input() order: INtsDataOrder = { field: null, dir: false };

    /**
     *
     * @event NtsDatagridComponent#orderChange
     * @type {INtsDataOrder}
     */
    @Output() orderChange: EventEmitter<INtsDataOrder> = new EventEmitter<INtsDataOrder>();
    orderKey = null;

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
    }
    /**
     * Initialize the children elements got from the content
     */
    ngAfterContentInit() {
        this.columns = this.columnsComponents.toArray();
        this.customRow = this.customRowDirective ? this.customRowDirective.templateRef : null;
    }

    /**
     * @param {any} column The field selected to order the items
     */
    onOrderBy(column) {
        if (column.sortable === false || column.sortable === undefined && this.sortable === false) { return; }
        if (this.order.field === column.field) {
            this.order.dir = !this.order.dir;
        } else {
            this.order.field = column.field;
            this.order.dir = false;
        }
        if (this.local) {
            this.orderKey = (this.order.dir ? '+' : '-') + this.order.field;
        }
        this.orderChange.emit(this.order);
    }

    /**
     * @returns {boolean} True if all the items are selected
     */
    allSelected(): boolean {
        return this.dataSelected.length === this.dataView.length;
    }

    /**
     * Selects or unselects all the items keeping the consistency of the data stores
     *
     * @param {boolean} value If true: select, else: unselect
     */
    selectAll(value: boolean) {
        this.dataSelected = value ? [...this.dataView] : [];
        this.dataView.forEach(id => this.dataSource[id].selected = value);
    }

    /**
     * Selects or unselects an items keeping the consistency of the data stores
     *
     * @param {string} id The ID o the item to select/unselect
     * @param {boolean} [value=true] If true: select, else: unselect
     */
    selectItem(id: string, value: boolean = true) {
        const index = this.dataSelected.indexOf(id);
        if (value && index === -1) {
            this.dataSelected.push(id);
        } else if (!value && index !== -1) {
            this.dataSelected.splice(index, 1);
        }
        this.dataSource[id].selected = value;
    }

    /**
     * Fills the auxiliar data stores (dataView, dataSource and dataSelected) from the variable 'data'.
     *
     * @private
     */
    private updateData() {
        const dataSource = {};
        const dataView = [];

        if (this.data && this.data.length) {
            this.data.forEach(el => {
                const id = el['id'] || uuid();
                if (!el['id']) {
                    el['id'] = id;
                    el['randomId'] = true;
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
