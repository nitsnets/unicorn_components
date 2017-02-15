import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

import { IModalContent } from '../../src/components/containers/modal/modal.interface';

@Component({
    selector: 'nts-demo-modal-content',
    templateUrl: 'demo-modal-content.component.html',
    styleUrls: ['demo-modal-content.component.scss']
})
export class NtsDemoModalContentComponent implements OnInit, OnDestroy, IModalContent {
    @Output() submitModal = new EventEmitter();
    @Output() cancelModal = new EventEmitter();


    constructor(
    ) { }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    initModalOptions(options: {}) {
        if (options['parent']) {
            // this.newPage.parent = options['parent'];
        }
    }
    onCancel() {
        this.cancelModal.emit();
    }
    onSubmitForm() {
        this.submitModal.emit({ info: 'xxx' });
    }
}
