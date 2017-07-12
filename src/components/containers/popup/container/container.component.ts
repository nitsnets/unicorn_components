import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

import { UniPopupComponent } from '../popup.component';

@Component({
    selector: 'uni-popup-container',
    templateUrl: 'container.component.html',
    styleUrls: ['container.component.scss'],
})
export class UniPopupContainerComponent {
    public close = new EventEmitter();
    public closeBtn = true;

    constructor(public elementRef: ElementRef, ) { }
}
