import { AfterViewInit, ComponentRef, Directive, ElementRef, HostListener, Input } from '@angular/core';

import { NtsTooltipComponent } from './tooltip.component';
import { TooltipService } from './tooltip.service';

@Directive({
    selector: '[ntsTooltip]',
})
export class NtsTooltipDirective implements AfterViewInit {
    private tooltipRef: ComponentRef<NtsTooltipComponent> = null;
    private element: any = null;

    @Input() ntsTooltip = '';
    @Input() orientation: 'right' | 'top' | 'bottom' | 'left' = 'right';

    @HostListener('mouseover') onMouseover() { this.openTooltip(); }
    @HostListener('mouseout') onMouseout() { this.closeTooltip(); }


    constructor(
        private elementRef: ElementRef,
        private tooltipService: TooltipService,
    ) { }

    ngAfterViewInit() {
        this.element = this.elementRef.nativeElement;
    }

    openTooltip() {
        this.tooltipRef = this.tooltipService.createTooltip(this.ntsTooltip, {
            element: this.element,
            orientation: this.orientation
        });
    }

    closeTooltip() {
        this.tooltipRef.destroy();
    }

}
