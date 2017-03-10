import { Component, ElementRef, HostBinding, Input, OnInit, Optional } from '@angular/core';

import { NtsDatagridComponent } from '../datagrid.component';
import { removeHostElement } from '../../../../utils';

@Component({
    selector: 'nts-datagrid-cell',
    templateUrl: 'cell.component.html'
})
export class NtsDatagridCellComponent implements OnInit {
    @Input()
    @HostBinding('class.highlight')
    highlight;

    @Input()
    @HostBinding('style.flex-grow')
    width = 1;

    selectable = false;

    constructor(
        private element: ElementRef,
        private datagrid: NtsDatagridComponent
    ) {
        this.highlight = this.datagrid.highlight;
    }

    ngOnInit() {
    }

}
