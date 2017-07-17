import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

import { UniPopupComponent } from '../popup.component';

@Component({
    selector: 'uni-popup-container',
    templateUrl: 'container.component.html',
    styleUrls: ['container.component.scss'],
})
export class UniPopupContainerComponent {
    public close = new EventEmitter();
    public closable = true;

    constructor(public elementRef: ElementRef, ) { }
}
