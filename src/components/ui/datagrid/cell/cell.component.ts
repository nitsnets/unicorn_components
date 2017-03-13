import { Component, ElementRef, HostBinding, HostListener, Input, OnInit, Optional } from '@angular/core';

import { NtsDatagridColumnComponent } from './../column/column.component';
import { NtsDatagridComponent } from '../datagrid.component';

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

    @Input() clickPropagation: boolean;

    @Input() customCell;
    @Input() format;
    @Input() options;
    @Input() value;
    @Input() context;

    selectable = false;

    @HostListener('click', ['$event'])
    onCellClicked(event: MouseEvent) {
        this.datagrid.cellClick.emit(this.context);
        if (this.clickPropagation === false) {
            event.stopPropagation();
        }
    }

    constructor(
        private element: ElementRef,
        private datagrid: NtsDatagridComponent,

        // If not null indicates that it is custom cell inside a column
        @Optional() private column: NtsDatagridColumnComponent
    ) {
        this.highlight = column ? false : this.datagrid.highlightCell;
    }

    ngOnInit() {
    }

}
