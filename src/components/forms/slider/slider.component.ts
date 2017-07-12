import { Component, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

import { UniColor } from '../../../models/types';
import { UniInputBaseComponent } from '../../base/input-base.component';

@Component({
    selector: 'uni-slider',
    templateUrl: 'slider.component.html',
    styleUrls: ['slider.component.scss']
})
export class UniSliderComponent extends UniInputBaseComponent implements OnChanges {

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
    }
    get thumbStyle(): { [key: string]: string } {
        const container = this.elementRef.nativeElement;
        const height = container.clientHeight / 2;
        const width = height;
        return {
            height: `${height}px`,
            width: `${width}px`,
            transform: `translateX(${this.percent * container.clientWidth - width / 2}px)`
        };
    };
    get trackStyle(): { [key: string]: string } {
        const width = this.elementRef.nativeElement.clientWidth;
        return {
            width: `${this.percent * width}px`
        }
    };
    private percent = 0;

    ngOnChanges(changes) {
        if (changes['uniModel'] || changes['max'] || changes['min']) {
            this.updatePercentByModel();
        }
    }
    constructor(
        private elementRef: ElementRef
    ) { super(); }

    private updatePercentByModel() {
        if (this.max < this.min) { return this.percent = this.percent = 0; }
        if (this.max === this.min) { return this.percent = this.max; }
        if (this.uniModel <= this.min) { return this.percent = 0; }
        if (this.uniModel >= this.max) { return this.percent = 1; }
        this.percent = this.uniModel / (this.max - this.min);
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
