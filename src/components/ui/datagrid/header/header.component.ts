import { Component } from '@angular/core';
import { ModalService } from './../../../containers/modal/modal.service';
import { NtsDatagridComponent } from './../datagrid.component';

@Component({
    selector: 'nts-datagrid-header',
    templateUrl: './header.component.html'
})
export class NtsDatagridHeaderComponent {
    constructor(
        private datagrid: NtsDatagridComponent,
        private modalService: ModalService
    ) { }

    onDeleteAttempt() {
        if (this.datagrid.deleteConfirm === 'inline') {
            this.datagrid.deletingSelection = true;
        } else {
            this.datagrid.openDeleteModal(this.datagrid.selected.length).subscribe(
                () => this.datagrid.onDeleteSelection(),
                () => { }
            );
        }
    }
}
