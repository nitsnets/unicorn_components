import { AfterContentInit, Component, ContentChild, ContentChildren, EventEmitter, Input, Output, QueryList, TemplateRef } from '@angular/core';

import { NtsDatagridColumnComponent } from './column/column.component';
import { NtsDatagridRowDirective } from './row/row-variables.directive';

export type NtsDataArray = Array<{ [key: string]: any }>;
export interface NtsDataOrder { field: string; dir: boolean; };

@Component({
    selector: 'nts-datagrid',
    templateUrl: './datagrid.component.html',
    styleUrls: ['./datagrid.component.scss']
})
export class NtsDatagridComponent implements AfterContentInit {

    @Input() data: NtsDataArray = null;
    @Output() dataChange = new EventEmitter<NtsDataArray>();

    @Input() sortable = true;
    @Input() orderLocal = true;
    @Input() order: NtsDataOrder = { field: null, dir: false };
    @Output() orderChange = new EventEmitter<NtsDataOrder>();
    orderKey = null;

    @Output() cellClick = new EventEmitter();

    @ContentChildren(NtsDatagridColumnComponent) columnsComponents: QueryList<NtsDatagridColumnComponent> = null;
    @ContentChild(NtsDatagridRowDirective) customRowDirective: NtsDatagridRowDirective = null;

    columns: NtsDatagridColumnComponent[];
    customRow: TemplateRef<Object>;

    constructor() { }

    ngAfterContentInit() {
        this.columns = this.columnsComponents.toArray();
        this.customRow = this.customRowDirective ? this.customRowDirective.templateRef : null;
    }
    onOrderBy(column) {
        if (column.sortable === false || column.sortable === undefined && this.sortable === false) { return; }
        if (this.order.field === column.field) {
            this.order.dir = !this.order.dir;
        } else {
            this.order.field = column.field;
            this.order.dir = false;
        }
        if (this.orderLocal) {
            this.orderKey = (this.order.dir ? '+' : '-') + this.order.field;
        }
        this.orderChange.emit(this.order);
        this.updateData();
    }
    updateData() {
        this.data = [...this.data];
    }

}
