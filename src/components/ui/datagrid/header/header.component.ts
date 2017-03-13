import { Component } from '@angular/core';
import { NtsDatagridComponent } from './../datagrid.component';

@Component({
    selector: 'nts-datagrid-header',
    templateUrl: './header.component.html'
})
export class NtsDatagridHeaderComponent {
    constructor(private datagrid: NtsDatagridComponent) { }
}
