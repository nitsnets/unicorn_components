import { Component, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'go-popup-container',
    templateUrl: 'container.component.html',
    styleUrls: ['container.component.scss'],
})
export class GoPopupContainerComponent {
    @Output() close = new EventEmitter()

    constructor(public elementRef: ElementRef) { }

    onClose() {
        this.close.emit();
    }
}
