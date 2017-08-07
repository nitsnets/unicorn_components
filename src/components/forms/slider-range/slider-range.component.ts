import { Component, ElementRef, HostBinding, HostListener, Input, OnChanges } from '@angular/core';

import { UniSliderBaseComponent } from '../../base/slider-base.component';

type SliderModel = { sliding: boolean, percent: number };

@Component({
    selector: 'uni-slider-range',
    templateUrl: 'slider-range.component.html',
    styleUrls: ['slider-range.component.scss']
})
export class UniSliderRangeComponent extends UniSliderBaseComponent implements OnChanges {

    public thumbs: { [key: string]: SliderModel } = {
        from: { sliding: false, percent: 0 },
        to: { sliding: false, percent: 0 }
    }
    @Input() pushable = true;
    @Input() showTicks = false;

    @HostBinding('class.uni-slider') componentClass = true;

    @HostListener('pan', ['$event'])
    onSlide(event) {
        const percent = this.getPercentByX(event.center.x);
        let thumb = this.sliding || this.selectThumbByPercent(percent);
        this.thumbs[thumb].percent = percent;
        this.fixPercents();
        this.updateModelByPercent();
        event.preventDefault();
    }
    @HostListener('tap', ['$event'])
    @HostListener('press', ['$event'])
    onClick(event) {
        const percent = this.getPercentByX(event.center.x);
        const thumb = this.selectThumbByPercent(percent);
        this.thumbs[thumb].percent = percent;
        this.fixPercents();
        this.updateModelByPercent();
        event.preventDefault();
    }
    @HostListener('panstart', ['$event'])
    onStartSlide(event) {
        const thumb = this.selectThumbByPercent(this.getPercentByX(event.center.x));
        this.sliding = thumb;
        this.thumbs[thumb].sliding = true;
    }

    @HostListener('panend', ['$event'])
    onEndSlide(event) {
        if (this.sliding && this.thumbs[this.sliding]) {
            this.thumbs[this.sliding].sliding = false;
        }
        this.sliding = null;
    }


    get thumbFromStyle() {
        return { transform: `translateX(${this.thumbs.from.percent * this.elementRef.nativeElement.clientWidth}px)` };
    }
    get thumbToStyle() {
        return { transform: `translateX(${this.thumbs.to.percent * this.elementRef.nativeElement.clientWidth}px)` };
    }
    get trackStyle() {
        const sliderWidth = this.elementRef.nativeElement.clientWidth;
        return {
            left: `${this.thumbs.from.percent * sliderWidth}px`,
            width: `${(this.thumbs.to.percent - this.thumbs.from.percent) * sliderWidth}px`
        };
    }

    private sliding: 'from' | 'to' = null;

    constructor(elementRef: ElementRef) { super(elementRef); }

    private selectThumbByPercent(percent: number): 'from' | 'to' {
        const fromDiff = percent - this.thumbs.from.percent;
        const fromDiffAbs = Math.abs(fromDiff);
        const toDiff = percent - this.thumbs.to.percent;
        const toDiffAbs = Math.abs(toDiff);

        if (fromDiffAbs < toDiffAbs) { return 'from'; }
        if (fromDiffAbs > toDiffAbs) { return 'to'; }
        if (toDiff > 0) { return 'to'; }
        return 'from';
    }


    updatePercentByModel() {
        // TODO: Allow thumbs refresh when external model changes happen
    }

    updateModelByPercent() {
        if (this.thumbs.from.percent > this.thumbs.to.percent) {
            if (this.sliding === 'from') {
                this.thumbs.to.percent = this.thumbs.from.percent;
            } else {
                this.thumbs.from.percent = this.thumbs.to.percent;
            }
        }
        this.onNgModelChange({
            from: Math.max(this.thumbs.from.percent, 0) * this.range,
            to: Math.min(this.thumbs.to.percent, 1) * this.range
        });
    }
    private fixPercents() {
        if (this.thumbs.from.percent > this.thumbs.to.percent) {
            if (this.sliding === 'from') {
                this.thumbs.to.percent = this.pushable ? this.thumbs.from.percent : this.thumbs.from.percent + 1;
            } else {
                this.thumbs.from.percent = this.pushable ? this.thumbs.to.percent : this.thumbs.to.percent + 1;
            }
        }
    }
}
