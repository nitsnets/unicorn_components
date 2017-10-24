import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

import { DynamicContainerService } from '../../base/dynamic-container/dynamic-container.service';
import { UniToastComponent } from './toast.component';

@Injectable()
export class ToastService extends DynamicContainerService {
    toastRef;
    toastSub;
    intervalClose;

    constructor(cmpFactoryResolver: ComponentFactoryResolver) {
        super(cmpFactoryResolver);
    }

    createToast(
        msg: string,
        options = {},
        viewContainerRef: ViewContainerRef = this.defaultContainer
    ): Observable<any> {

        if (!this.toastRef) {
            this.toastSub = new Subject();

            this.toastRef = this.attachComponent(
                UniToastComponent,
                viewContainerRef
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
        this.intervalClose = setTimeout(
            () => { this.close(); },
            options['duration'] ? options['duration'] : 2000
        );

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
