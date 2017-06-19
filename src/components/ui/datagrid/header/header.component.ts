import { Component } from '@angular/core';
import { ModalService } from './../../../containers/modal/modal.service';
import { UniDatagridComponent } from './../datagrid.component';

@Component({
    selector: 'uni-datagrid-header',
    templateUrl: './header.component.html'
})
export class UniDatagridHeaderComponent {
    constructor(
        public datagrid: UniDatagridComponent,
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
