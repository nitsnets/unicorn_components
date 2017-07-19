import { Component, ElementRef, HostListener, Input, OnChanges, HostBinding } from '@angular/core';

import { UniColor } from '../../../models/types';
import { UniInputBaseComponent } from '../../base/input-base.component';

@Component({
    selector: 'uni-slider',
    templateUrl: 'slider.component.html',
    styleUrls: ['slider.component.scss']
})
export class UniSliderComponent extends UniInputBaseComponent implements OnChanges {

    @HostBinding('class.uni-slider') componentClass = true;
    @Input() min = 0;
    @Input() max = 100;

    @HostListener('pan', ['$event'])
    @HostListener('tap', ['$event'])
    @HostListener('press', ['$event'])
    onSlide(event) {
        const rect = this.elementRef.nativeElement.getBoundingClientRect();
        const width = rect.right - rect.left;
        const sliding = Math.max(rect.left, Math.min(rect.right, event.center.x)) - rect.left;
        this.percent = sliding / width;
        this.updateModelByPercent();
        event.preventDefault();
    }
    @HostListener('panstart') onStartSlide() { this.sliding = true; }
    @HostListener('panend') onEndSlide() { this.sliding = false; }

    get thumbStyle() { return { transform: `translateX(${this.percent * this.elementRef.nativeElement.clientWidth}px)` }; };
    get trackStyle() { return { width: `${this.percent * this.elementRef.nativeElement.clientWidth}px` } };

    public sliding = false;
    private percent = 0;

    ngOnChanges(changes) {
        if (changes['model'] || changes['max'] || changes['min']) {
            this.updatePercentByModel();
        }
    }
    constructor(
        private elementRef: ElementRef
    ) { super(); }

    private updatePercentByModel() {
        if (this.max < this.min) { return this.percent = this.percent = 0; }
        if (this.max === this.min) { return this.percent = this.max; }
        if (this.model <= this.min) { return this.percent = 0; }
        if (this.model >= this.max) { return this.percent = 1; }
        this.percent = this.model / (this.max - this.min);
    }
    private updateModelByPercent() {
        if (this.percent >= 1) {
            this.onNgModelChange(this.max);
        } else if (this.percent <= 0) {
            this.onNgModelChange(this.min);
        } else {
            this.onNgModelChange(this.percent * (this.max - this.min));
        }
    }
}
