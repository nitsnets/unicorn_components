import { Component, ElementRef, HostListener, Input } from '@angular/core';

import { UniInputBaseComponent } from '../../base/input-base.component'

@Component({
    selector: 'uni-slider',
    templateUrl: 'slider.component.html',
    styleUrls: ['slider.component.scss']
})
export class UniSliderComponent extends UniInputBaseComponent {

    private _uniModel;
    @Input() set uniModel(value) {
        this._uniModel = value;
    }
    get uniModel() { return this._uniModel; }

    private _min;
    @Input() set min(value) {
        this._min = value;
    }
    get min() { return this._min; }

    private _max;
    @Input() set max(value) {
        this._max = value;
    }
    get max() { return this._max; }

    @HostListener('pan', ['$event'])
    onSlide(event) {
        const rect = this.elementRef.nativeElement.getBoundingClientRect();
        const width = rect.right - rect.left;
        const sliding = Math.max(rect.left, Math.min(rect.right, event.center.x)) - rect.left;
        this.percent = sliding / width;
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
        return {

        }
    };

    private percent;

    private updatePercentByModel() {

    }

    constructor(
        private elementRef: ElementRef
    ) { super(); }
}
