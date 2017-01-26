import { Component, ElementRef, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'nts-popup-container',
    templateUrl: 'container.component.html',
    styleUrls: ['container.component.scss'],
})
export class NtsPopupContainerComponent {
    @Input() closeBtn = true;
    @Output() close = new EventEmitter();


    constructor(public elementRef: ElementRef) { }

    onClose() {
        this.close.emit();
    }
}
