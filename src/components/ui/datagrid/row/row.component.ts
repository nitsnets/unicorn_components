import { Component } from '@angular/core';
import { NtsDatagridComponent } from './../datagrid.component';

@Component({
    selector: 'nts-datagrid-row',
    template: '<ng-content></ng-content>'
})
export class NtsDatagridRowComponent {

    constructor(public datagrid: NtsDatagridComponent) {
        console.log(datagrid);
    }
}
