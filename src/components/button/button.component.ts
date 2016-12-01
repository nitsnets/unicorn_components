import { Component, OnInit, Input, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'nts-button',
    templateUrl: 'button.component.html',
    styleUrls: ['button.component.scss'],
})
export class NtsButtonComponent implements OnInit {
    @Input() label: string;
    @Input() sublabel: string;
    @Input() icon: string;
    @Input() type: string;
    @Input() size: string;
    @Input() dropdown = false;
    @Input() popup = false;
    @Input() popupIcon: string;


    @Input() fileType: string;
    @Output() fileChanged = new EventEmitter();
    @ViewChild('inputFile') inputFile: ElementRef;

    constructor() { }

    ngOnInit() { }

    onClickButton() {
        if (this.type === 'file' && this.inputFile && document.createEvent) {
            let evt = document.createEvent('MouseEvents');
            evt.initEvent('click', true, false);
            this.inputFile.nativeElement.dispatchEvent(evt);
        }
    }
    onAuxBtnClick(event) {
        event.preventDefault();
        event.stopPropagation();
    }
}
