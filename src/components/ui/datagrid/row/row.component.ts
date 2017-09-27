import { Component, EventEmitter, HostBinding, Input, OnChanges, Output } from '@angular/core';

import { UniDatagridComponent } from '../datagrid.component';

/**
 * @author Alvaro Yuste
 *
 * @export
 * @class UniDatagridRowComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'uni-datagrid-row',
    templateUrl: 'row.component.html'
})
export class UniDatagridRowComponent implements OnChanges {

    @HostBinding('class.uni-datagrid-row') componentClass = true;
    @HostBinding('class.uni-datagrid-row--selected')
    @Input() selected = false;

    @HostBinding('class.uni-datagrid-row--box')
    @Input() box = false;

    @HostBinding('class.uni-datagrid-row--any-selected')
    @Input() anySelected = false;

    @HostBinding('class.uni-datagrid-row--deleting-selection')
    @Input() deletingSelection = false;

    @Input()
    @HostBinding('class.uni-datagrid-row--highlight')
    highlight;

    @HostBinding('class.uni-datagrid-row--deleting')
    deleting = false;

    @Output() selectedChange = new EventEmitter();

    @Output() delete = new EventEmitter();

    constructor(
        public datagrid: UniDatagridComponent,
    ) { }

    ngOnChanges(changes) {
        if (changes.anySelected && this.anySelected) {
            this.deleting = false;
        }
    }
    onDeleteAttempt() {
        if (this.datagrid.deleteConfirm === 'inline') {
            this.deleting = true;
        } else {
            this.datagrid.openDeleteModal().subscribe(
                () => this.delete.emit(),
                () => { }
            );
        }
    }

}
