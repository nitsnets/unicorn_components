import { AfterViewInit, ComponentRef, Directive, ElementRef, HostListener, Input } from '@angular/core';

import { TooltipService } from './tooltip.service';
import { UniTooltipComponent } from './tooltip.component';

@Directive({
    selector: '[uniTooltip]',
})
export class UniTooltipDirective implements AfterViewInit {
    private tooltipRef: ComponentRef<UniTooltipComponent> = null;
    private element: any = null;

    @Input() uniTooltip = '';
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
        this.tooltipRef = this.tooltipService.createTooltip(this.uniTooltip, {
            element: this.element,
            orientation: this.orientation
        });
    }

    closeTooltip() {
        this.tooltipRef.destroy();
    }

}
