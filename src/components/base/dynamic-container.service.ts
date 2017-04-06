import { ComponentFactoryResolver, Type, ViewContainerRef } from '@angular/core';

/**
 * Used to attach dynamic components to a container.
 * Extended by ModalService, ToastService... and so.
 *
 * @export
 * @abstract
 * @class DynamicContainerService
 */
export abstract class DynamicContainerService {
    defaultContainer: ViewContainerRef;

    constructor(private cmpFactoryResolver: ComponentFactoryResolver) { }

    setDefaultContainer(viewContainerRef: ViewContainerRef) {
        this.defaultContainer = viewContainerRef;
    }

    protected attachComponent(component: Type<any>, viewContainerRef: ViewContainerRef = this.defaultContainer) {
        if (!viewContainerRef) {
            throw new Error(`No container set.
                You can set one by default using modalService.setDefaultContainer(ViewContainerRef),
                Or manually at each modalService.createModal(...,..., ViewContainerRef)`
            );
        }
        return viewContainerRef.createComponent(
            this.cmpFactoryResolver.resolveComponentFactory(component)
        );
    }
}
