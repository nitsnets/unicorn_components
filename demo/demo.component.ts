import { Component, ViewContainerRef } from '@angular/core';
import { ToastService } from '../src/modules/toast/toast.service';

@Component({
    selector: 'nts-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent {


    constructor(
        private viewContainerRef: ViewContainerRef,
        private toastService: ToastService
    ) { }

    openToast() {
        this.toastService.createToast('Esto es el mensaje', { showClose: false, time: 3000 }, this.viewContainerRef).subscribe(
            _ => { console.log('accept'); }
        );
    }



}
