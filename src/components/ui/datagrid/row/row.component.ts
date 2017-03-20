import { Component, EventEmitter, HostBinding, Input, OnChanges, Output } from '@angular/core';

import { ModalService } from '../../../containers/modal/modal.service';
import { NtsDatagridComponent } from '../datagrid.component';

/**
 * @author Alvaro Yuste
 *
 * @export
 * @class NtsDatagridRowComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'nts-datagrid-row',
    templateUrl: 'row.component.html'
})
export class NtsDatagridRowComponent implements OnChanges {

    @HostBinding('class.selected')
    @Input() selected = false;

    @HostBinding('class.box')
    @Input() box = false;

    @HostBinding('class.any-selected')
    @Input() anySelected = false;

    @HostBinding('class.deleting-selection')
    @Input() deletingSelection = false;

    @Input()
    @HostBinding('class.highlight')
    highlight;

    @HostBinding('class.deleting')
    deleting = false;

    @Output() selectedChange = new EventEmitter();

    @Output() delete = new EventEmitter();

    constructor(
        private datagrid: NtsDatagridComponent,
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
