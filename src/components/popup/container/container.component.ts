import { Component, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'nts-popup-container',
    templateUrl: 'container.component.html',
    styleUrls: ['container.component.scss'],
})
export class NtsPopupContainerComponent {
    @Output() close = new EventEmitter()

    constructor(public elementRef: ElementRef) { }

    onClose() {
        this.close.emit();
    }
}
