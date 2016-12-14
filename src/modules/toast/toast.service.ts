import { Injectable, ApplicationRef, ViewContainerRef, ComponentFactoryResolver, ElementRef, Injector } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { NtsToastComponent } from './toast.component';

@Injectable()
export class ToastService {
    // appElementRef: ElementRef;
    toastRef;
    toastSub;
    intervalClose;

    constructor(
        private appRef: ApplicationRef,
        private injector: Injector,
        private cmpFactoryResolver: ComponentFactoryResolver
    ) { }


    createToast(msg: string, options, viewContainer: any) {
        if (!this.toastRef) {

            this.toastSub = new Subject();

            this.toastRef = viewContainer.createComponent(
                this.cmpFactoryResolver.resolveComponentFactory(NtsToastComponent),
                viewContainer.length, this.injector, null
            );
            this.toastRef.instance.setMessage(msg);
            this.toastRef.instance.initContent(options);

            this.toastRef.instance.accept.subscribe(
                ev => {
                    this.toastSub.next(ev);
                    this.close();
                }
            );
        } else {
            this.toastRef.instance.setMessage(msg);
        }

        clearTimeout(this.intervalClose);
        this.intervalClose = setTimeout(() => { this.close(); }, options.time ? options.time : 2000);

        return this.toastSub.asObservable();


    }

    close() {
        if (this.intervalClose) {
            clearTimeout(this.intervalClose);
        }

        this.toastRef.instance.close();
        setTimeout(() => { this.clear(); }, 500);
    }

    clear() {
        if (this.toastRef) {
            this.toastRef.destroy();
            this.toastRef = null;
        }
    }
}
