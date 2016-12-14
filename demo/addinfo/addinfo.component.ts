import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

import { IModalContent } from '../../src/modules/modal/modal.interface';

@Component({
    selector: 'nts-addinfo',
    templateUrl: 'addinfo.component.html',
    styleUrls: ['addinfo.component.scss']
})
export class NtsAddInfoComponent implements OnInit, OnDestroy, IModalContent {
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
        this.submitModal.emit({info: 'xxx'});
    }
}
