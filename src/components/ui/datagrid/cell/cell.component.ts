import { Component } from '@angular/core';
import { NtsDatagridComponent } from './../datagrid.component';

@Component({
    selector: 'nts-datagrid-cell',
    template: '<ng-content></ng-content>'
})
export class NtsDatagridCellComponent {

    constructor(public datagrid: NtsDatagridComponent) {
        console.log(datagrid);
    }
}
