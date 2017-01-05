import { Component, ViewContainerRef } from '@angular/core';
import { ToastService } from '../src/modules/toast/toast.service';
import { ModalService } from '../src/modules/modal/modal.service';
import { TooltipService } from '../src/modules/tooltip/tooltip.service';

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
    private tooltipService: TooltipService,
    private modalService: ModalService
  ) { }

  openToast() {
    this.toastService.createToast('Esto es el mensaje', { showClose: true, time: 3000 }, this.viewContainerRef).subscribe(
      _ => { console.log('accept'); }
    );
  }

  openModal(type = null) {
    this.modalService.createModal(NtsDemoModalContentComponent, { title: 'Demo Modal', type }, this.viewContainerRef).subscribe(
      param => { console.log('ok: ', param); }, _ => { console.log('ko'); }
    );
  }

  openTooltip(event) {
    this.tooltipService.createTooltip('Esto es el mensaje del tooltip informativo', {
      x: event.clientX,
      y: event.clientY
    }, this.viewContainerRef).subscribe(
      _ => { console.log('accept'); }
      );
  }

  closeTooltip() {
    this.tooltipService.close();
  }



}
