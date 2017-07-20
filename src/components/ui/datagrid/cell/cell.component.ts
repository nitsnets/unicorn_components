import { Component, ElementRef, HostBinding, HostListener, Input, OnInit, Optional } from '@angular/core';

import { UniDatagridColumnComponent } from './../column/column.component';
import { UniDatagridComponent } from '../datagrid.component';

@Component({
    selector: 'uni-datagrid-cell',
    templateUrl: 'cell.component.html'
})
export class UniDatagridCellComponent implements OnInit {

    @HostBinding('class.uni-datagrid-cell') componentClass = true;
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
    @Input() label;
    @Input() value;
    @Input() context;
    @Input() showLabels;

    selectable = false;

    @HostListener('click', ['$event'])
    onCellClicked(event: MouseEvent) {
        if (this.context) {
            this.datagrid.cellClick.emit(this.context);
        }
        if (this.clickPropagation === false) {
            event.stopPropagation();
        }
    }

    constructor(
        private element: ElementRef,
        private datagrid: UniDatagridComponent,

        // If not null indicates that it is custom cell inside a column
        @Optional() private column: UniDatagridColumnComponent
    ) {
        this.highlight = column ? false : this.datagrid.highlightCell;
    }

    ngOnInit() {
    }

}
