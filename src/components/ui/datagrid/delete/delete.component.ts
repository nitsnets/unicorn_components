import { Component, EventEmitter, Output } from '@angular/core';

import { IModalContent } from '../../../containers/modal/modal.interface';

@Component({
    selector: 'nts-datagrid-delete',
    templateUrl: './delete.component.html',
    styleUrls: ['./delete.component.scss']
})
export class NtsDatagridDeleteComponent implements IModalContent {

    @Output() submitModal = new EventEmitter();
    @Output() cancelModal = new EventEmitter();

    itemsCount = 0;

    initModalOptions(options: {}) {
        this.itemsCount = options['itemsCount'];
    }
    onCancel() {
        this.cancelModal.emit();
    }

}
