import { Injectable, ApplicationRef, ViewContainerRef, ComponentFactoryResolver, ElementRef, Injector } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { NtsTooltipComponent } from './tooltip.component';

@Injectable()
export class TooltipService {
    // appElementRef: ElementRef;
    tooltipRef;
    tooltipSub;
    intervalClear;

    constructor(
        private appRef: ApplicationRef,
        private injector: Injector,
        private cmpFactoryResolver: ComponentFactoryResolver
    ) { }

    createTooltip(msg: string, options, viewContainer: any) {
        clearTimeout(this.intervalClear);
        this.clear();

        this.tooltipSub = new Subject();

        this.tooltipRef = viewContainer.createComponent(
            this.cmpFactoryResolver.resolveComponentFactory(NtsTooltipComponent),
            viewContainer.length, this.injector, null
        );
        this.tooltipRef.instance.setMessage(msg);
        this.tooltipRef.instance.initContent(options);

        this.tooltipRef.instance.accept.subscribe(
            ev => {
                this.tooltipSub.next(ev);
                this.close();
            }
        );
        return this.tooltipSub.asObservable();
    }

    close() {
        if (this.tooltipRef.instance) {
            this.tooltipRef.instance.close();
            this.intervalClear = setTimeout(() => { this.clear(); }, 500);
        }
    }

    clear() {
        clearTimeout(this.intervalClear);
        if (this.tooltipRef) {
            this.tooltipRef.destroy();
            this.tooltipRef = null;
        }
    }
}
