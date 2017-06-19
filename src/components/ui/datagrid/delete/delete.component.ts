import { Component, EventEmitter, Output } from '@angular/core';

import { IModalContent } from '../../../containers/modal/modal.interface';

@Component({
    selector: 'uni-datagrid-delete',
    templateUrl: './delete.component.html',
    styleUrls: ['./delete.component.scss']
})
export class UniDatagridDeleteComponent implements IModalContent {

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
