import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'nts-tooltip',
    templateUrl: 'tooltip.component.html',
    styleUrls: ['tooltip.component.scss'],
})
export class NtsTooltipComponent {

    tooltipOptions = {};
    msg = '';

    @Output() accept = new EventEmitter();

    constructor(private elementRef: ElementRef) { }

    initContent(options) {
        this.tooltipOptions = options;
    }

    setMessage(msg) {
        this.msg = msg;
    }




}
