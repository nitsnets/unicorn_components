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
    this.toastService.createToast({ msg: 'Esto es el mensaje' }, this.viewContainerRef).subscribe(
     _ => { console.log('accept'); }
    );
  }



}
