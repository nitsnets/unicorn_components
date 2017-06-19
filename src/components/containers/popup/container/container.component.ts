import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'uni-popup-container',
    templateUrl: 'container.component.html',
    styleUrls: ['container.component.scss'],
})
export class UniPopupContainerComponent {
    @Input() closeBtn = true;
    @Output() close = new EventEmitter();


    constructor(public elementRef: ElementRef) { }

    onClose() {
        this.close.emit();
    }
}
