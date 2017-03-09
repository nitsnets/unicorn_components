import { Component, HostBinding, Input } from '@angular/core';

import { NtsDatagridComponent } from './../datagrid.component';

@Component({
    selector: 'nts-datagrid-cell',
    templateUrl: 'cell.component.html'
})
export class NtsDatagridCellComponent {
    @Input()
    highlight;

    @Input()
    @HostBinding('style.flex-grow')
    width = 1;

    @HostBinding('class.highlight')
    get highlightClass(): boolean {
        return this.highlight === true || this.highlight === undefined && this.datagrid.highlight === true ? true : false;
    };

    constructor(public datagrid: NtsDatagridComponent) { }

}
