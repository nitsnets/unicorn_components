import { ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';

import { DynamicContainerService } from '../../base/dynamic-container.service';
import { NtsTooltipComponent } from './tooltip.component';

@Injectable()
export class TooltipService extends DynamicContainerService {

    constructor(cmpFactoryResolver: ComponentFactoryResolver) { super(cmpFactoryResolver); }

    createTooltip(msg: string, options = {}, viewContainerRef: ViewContainerRef = this.defaultContainer) {
        const tooltipRef: ComponentRef<NtsTooltipComponent> =
            this.attachComponent(NtsTooltipComponent, viewContainerRef);

        tooltipRef.instance.setMessage(msg);
        tooltipRef.instance.setOptions(options);
        return tooltipRef;
    }

}
