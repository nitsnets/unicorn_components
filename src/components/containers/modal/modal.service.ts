import { ComponentFactoryResolver, ComponentRef, Injectable, Type, ViewContainerRef } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

import { DynamicContainerService } from '../../base/dynamic-container.service';
import { NtsModalComponent } from './modal.component';

@Injectable()
export class ModalService extends DynamicContainerService {
    constructor(cmpFactoryResolver: ComponentFactoryResolver) { super(cmpFactoryResolver); }

    createModal(
        component: Type<any>,
        options = {},
        viewContainerRef: ViewContainerRef = this.defaultContainer
    ): Observable<any> {

        const modalRef: ComponentRef<NtsModalComponent> = this.attachComponent(NtsModalComponent, viewContainerRef);
        modalRef.instance.initContent(component, options);

        const modalSub = new Subject();
        modalRef.instance.cancel.subscribe(
            ev => { modalSub.error(ev); modalRef.destroy(); }
        );
        modalRef.instance.submit.subscribe(
            ev => { modalSub.next(ev); modalRef.destroy(); }
        );

        return modalSub.asObservable();
    }
}
