import { ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';

import { DynamicContainerService } from '../../base/dynamic-container/dynamic-container.service';
import { UniTooltipComponent } from './tooltip.component';

@Injectable()
export class TooltipService extends DynamicContainerService {

    constructor(cmpFactoryResolver: ComponentFactoryResolver) { super(cmpFactoryResolver); }

    createTooltip(msg: string, options: any, viewContainerRef: ViewContainerRef = this.defaultContainer) {
        const tooltipRef: ComponentRef<UniTooltipComponent> =
            this.attachComponent(UniTooltipComponent, viewContainerRef);

        tooltipRef.instance.setMessage(msg);
        tooltipRef.instance.setOptions(options);
        return tooltipRef;
    }
}
