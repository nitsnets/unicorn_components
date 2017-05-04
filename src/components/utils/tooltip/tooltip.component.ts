import { Component, ElementRef, EventEmitter, Inject, Output } from '@angular/core';

import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'nts-tooltip',
    templateUrl: 'tooltip.component.html',
    styleUrls: ['tooltip.component.scss'],
})
export class NtsTooltipComponent {

    options = {};
    message = '';

    @Output() accept = new EventEmitter();

    constructor(
        private elementRef: ElementRef,
        @Inject(DOCUMENT) private document: HTMLElement
    ) { }

    setOptions(options) {
        if ((options.left || options.right) && (options.top || options.bottom)) {
            return this.options = options
        }
        if (options.element && options.orientation) {
            return this.options = this.calculatePosition(options.element, options.orientation);
        }
    }

    setMessage(msg) {
        this.message = msg;
    }

    private calculatePosition(element: HTMLElement, orientation: 'left' | 'right' | 'bottom', container: HTMLElement = this.document): any {
        if (!element.getBoundingClientRect) { return {}; }

        const rect = element.getBoundingClientRect();

        switch (orientation) {
            case 'right': return { left: rect.right + 10, top: rect.top };
            case 'bottom': return { left: rect.left, top: rect.bottom + 10 };
            case 'left': return { left: rect.left - 225 - 10, top: rect.top };
            default: return {};
        }
    }
}
