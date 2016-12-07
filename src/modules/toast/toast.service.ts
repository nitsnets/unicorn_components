import { Injectable, ApplicationRef, ViewContainerRef, ComponentFactoryResolver, ElementRef, Injector } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { NtsToastComponent } from './toast.component';

@Injectable()
export  class ToastService {
    appElementRef: ElementRef;

    constructor(
        private appRef: ApplicationRef,
        private injector: Injector,
        private cmpFactoryResolver: ComponentFactoryResolver
    ) { }

    createToast(options: {}, viewContainer: ViewContainerRef) {
        let toastSub = new Subject();

        let toastRef = viewContainer.createComponent(
            this.cmpFactoryResolver.resolveComponentFactory(NtsToastComponent),
            viewContainer.length, this.injector, null
        );
        toastRef.instance.initContent(options);

         toastRef.instance.accept.subscribe(
            ev => { toastSub.next(ev); toastRef.destroy(); }
        );
      
        return toastSub.asObservable();
    }
}
