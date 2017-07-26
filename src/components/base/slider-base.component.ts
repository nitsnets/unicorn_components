import { ElementRef, HostListener, Input, OnChanges } from '@angular/core';

import { UniInputBaseComponent } from './input-base.component';

export abstract class UniSliderBaseComponent extends UniInputBaseComponent implements OnChanges {

    @Input() min = 0;
    @Input() max = 100;
    protected get range() { return this.max - this.min; }

    protected abstract onClick(event);
    protected abstract onStartSlide(event);
    protected abstract onSlide(event);
    protected abstract onEndSlide(event);

    ngOnChanges(changes) {
        if (changes['model'] || changes['max'] || changes['min']) {
            this.updatePercentByModel();
        }
    }
    constructor(
        protected elementRef: ElementRef
    ) { super(); }

    protected getPercentByX(x: number) {
        const rect = this.elementRef.nativeElement.getBoundingClientRect();
        const width = rect.right - rect.left;
        const sliding = Math.max(rect.left, Math.min(rect.right, x)) - rect.left;
        return sliding / width;
    }
    protected abstract updatePercentByModel;
    protected abstract updateModelByPercent;
}
