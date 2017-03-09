import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

import { NtsDatagridComponent } from './../datagrid.component';

@Component({
    selector: 'nts-datagrid-row',
    templateUrl: 'row.component.html'
})
export class NtsDatagridRowComponent {
    @HostBinding('class.selected')
    @Input() selected = false;
    @Output() selectedChange = new EventEmitter();
    selectable = false;

    constructor(public datagrid: NtsDatagridComponent) {
        this.selectable = datagrid.selectable;
    }
}
