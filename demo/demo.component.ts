import { Component, ViewContainerRef } from '@angular/core';
import { ToastService } from '../src/modules/toast/toast.service';
import { ModalService } from '../src/modules/modal/modal.service';

import { NtsDemoModalContentComponent } from './demo-modal-content/demo-modal-content.component';

@Component({
    selector: 'nts-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

    constructor(
        private viewContainerRef: ViewContainerRef,
        private toastService: ToastService,
        private modalService: ModalService
    ) { }

    openToast() {
        this.toastService.createToast('Esto es el mensaje', { showClose: true, time: 3000 }, this.viewContainerRef).subscribe(
            _ => { console.log('accept'); }
        );
    }

    openModal() {
        this.modalService.createModal(NtsDemoModalContentComponent, { title: 'Demo Modal' }, this.viewContainerRef).subscribe(
            param => { console.log('ok: ', param); }, _ => { console.log('ko'); }
        );
    }



}
