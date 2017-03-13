import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NtsDatagridColumnComponent } from '../column/column.component';
import { NtsDatagridComponent } from './../datagrid.component';

@Component({
    selector: 'nts-datagrid-header',
    templateUrl: './header.component.html'
})
export class NtsDatagridHeaderComponent implements OnInit {
    @Input() columns: NtsDatagridColumnComponent[];
    @Output() orderChange = new EventEmitter();

    constructor(private datagrid: NtsDatagridComponent) { }

    ngOnInit() {
    }

}
