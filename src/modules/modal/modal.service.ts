import { Injectable, ApplicationRef, Type, ViewContainerRef, ComponentFactoryResolver, ElementRef, Injector } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { NtsModalComponent } from './modal.component';

@Injectable()
export class ModalService {
  appElementRef: ElementRef;

  constructor(
    private appRef: ApplicationRef,
    private injector: Injector,
    private cmpFactoryResolver: ComponentFactoryResolver
  ) { }


  createModal(component: Type<any>, options: {}, viewContainer: any) {
    let modalSub = new Subject();

    let modalRef = viewContainer.createComponent(
      this.cmpFactoryResolver.resolveComponentFactory(NtsModalComponent),
      viewContainer.length, this.injector, null
    );
    modalRef.instance.initContent(component, options);

    modalRef.instance.cancel.subscribe(
      ev => { modalSub.error(ev); modalRef.destroy(); }
    );
    modalRef.instance.submit.subscribe(
      ev => { modalSub.next(ev); modalRef.destroy(); }
    );

    return modalSub.asObservable();
  }
}
