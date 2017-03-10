import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INtsDataOrder, NtsDatagridComponent } from './../datagrid.component';

import { NtsDatagridColumnComponent } from '../column/column.component';

@Component({
    selector: 'nts-datagrid-header',
    templateUrl: './header.component.html'
})
export class NtsDatagridHeaderComponent implements OnInit {
    @Input() columns: NtsDatagridColumnComponent[];
    @Input() order: INtsDataOrder = { field: null, dir: false };
    @Output() orderChange = new EventEmitter<INtsDataOrder>();

    constructor(private datagrid: NtsDatagridComponent) { }

    ngOnInit() {
    }

}
