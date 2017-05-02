import { AfterViewInit, ComponentRef, Directive, ElementRef, HostListener, Input } from '@angular/core';

import { NtsTooltipComponent } from './tooltip.component';
import { TooltipService } from './tooltip.service';

const tooltipMargin = 10;

@Directive({
    selector: '[ntsTooltip]',
})
export class NtsTooltipDirective implements AfterViewInit {
    private tooltipRef: ComponentRef<NtsTooltipComponent> = null;
    private element: HTMLElement = null;
    private position: { top?: number, right?: number, bottom?: number, left?: number };

    @Input() ntsTooltip = '';
    @Input() orientation: 'right' | 'bottom' | 'left' = 'right';

    @HostListener('mouseover') onMouseover() { this.openTooltip(); }
    @HostListener('mouseout') onMouseout() { this.closeTooltip(); }


    constructor(
        private elementRef: ElementRef,
        private tooltipService: TooltipService,
    ) { }

    ngAfterViewInit() {
        this.element = this.elementRef.nativeElement;
        this.calculatePosition();
    }

    openTooltip() {
        this.calculatePosition();
        this.tooltipRef = this.tooltipService.createTooltip('Esto es el mensaje del tooltip informativo', this.position);
    }

    calculatePosition() {
        const rect = this.element.getBoundingClientRect();

        console.log(rect);

        switch (this.orientation) {
            case 'right': this.position = { left: rect.right + tooltipMargin, top: rect.top }; break;
            case 'bottom': this.position = { left: rect.left, top: rect.bottom + tooltipMargin }; break;
            case 'left': this.position = { left: rect.left - 225 - tooltipMargin, top: rect.top }; break;
        }
    }

    closeTooltip() {
        this.tooltipRef.destroy();
    }

}
