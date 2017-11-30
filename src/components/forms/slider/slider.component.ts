import { Component, ElementRef, HostBinding, HostListener, Input, OnChanges } from '@angular/core';

import { UniSliderBaseComponent } from '../../base/slider-base/slider-base.component';

@Component({
    selector: 'uni-slider',
    templateUrl: 'slider.component.html',
    styleUrls: ['slider.component.scss']
})
export class UniSliderComponent extends UniSliderBaseComponent implements OnChanges {

    @Input() showTicks = false;

    @HostBinding('class.uni-slider') componentClass = true;

    @HostListener('pan', ['$event'])
    onSlide(event) {
        this.percent = this.getPercentByX(event.center.x);
        this.updateModelByPercent();
        event.preventDefault();
    }
    @HostListener('tap', ['$event'])
    @HostListener('press', ['$event'])
    onClick(event) {
        this.percent = this.getPercentByX(event.center.x);
        this.updateModelByPercent();
        event.preventDefault();
    }
    @HostListener('panstart', ['$event'])
    onStartSlide(event) { this.sliding = true; }

    @HostListener('panend', ['$event'])
    onEndSlide(event) { this.sliding = false; }

    get thumbStyle() { return { transform: `translateX(${this.percent * this.elementRef.nativeElement.clientWidth}px)` }; };
    get trackStyle() { return { width: `${this.percent * this.elementRef.nativeElement.clientWidth}px` } };

    public sliding = false;
    private percent = 0;

    constructor(elementRef: ElementRef) { super(elementRef); }

    updatePercentByModel() {
        if (this.max < this.min) { return this.percent = 0; }
        if (this.max === this.min) { return this.percent = this.max; }
        if (this.model <= this.min) { return this.percent = 0; }
        if (this.model >= this.max) { return this.percent = 1; }
        this.percent = this.model / (this.max - this.min);
    }
    updateModelByPercent() {
        if (this.percent >= 1) {
            this.percent = 1;
            this.onNgModelChange(this.max);
        } else if (this.percent <= 0) {
            this.percent = 0;
            this.onNgModelChange(this.min);
        } else {
            this.onNgModelChange(this.percent * (this.max - this.min));
        }
    }
}
