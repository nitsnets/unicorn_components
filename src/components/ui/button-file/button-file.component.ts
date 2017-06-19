import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { UniButtonBaseComponent } from '../../base/button-base.component';

@Component({
    selector: 'uni-button-file',
    templateUrl: 'button-file.component.html',
    styleUrls: ['button-file.component.scss'],
})
export class UniButtonFileComponent extends UniButtonBaseComponent {
    @Input() fileType: string;
    @Output() fileChanged = new EventEmitter();
    @ViewChild('input') inputElement: ElementRef;

    onClick() {
        if (!this.disabled && this.inputElement && document.createEvent) {
            const evt = document.createEvent('MouseEvents');
            evt.initEvent('click', true, false);
            this.inputElement.nativeElement.dispatchEvent(evt);
        }
    }
}
