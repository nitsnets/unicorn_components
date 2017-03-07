import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';

import { NtsDatagridColumnComponent } from './column/column.component';

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

    @Input() orderable = true;
    @Input() orderLocal = true;
    @Input() order: NtsDataOrder = { field: null, dir: false };
    @Output() orderChange = new EventEmitter<NtsDataOrder>();
    orderKey = null;

    @Output() cellClick = new EventEmitter();

    @ContentChildren(NtsDatagridColumnComponent) columnsComponents: QueryList<NtsDatagridColumnComponent> = null;

    columns: NtsDatagridColumnComponent[];

    constructor() { }

    ngAfterContentInit() {
        this.columns = this.columnsComponents.toArray();
    }
    onOrderBy(column) {
        if (this.order.field === column) {
            this.order.dir = !this.order.dir;
        } else {
            this.order.field = column;
            this.order.dir = false;
        }
        this.orderKey = (this.order.dir ? '+' : '-') + this.order.field;
    }

    updateData() {
        this.data = [...this.data];
    }
}
