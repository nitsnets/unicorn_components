import {
    Component, Input, Output, EventEmitter, ElementRef, AfterContentInit
} from '@angular/core';

@Component({
    selector: 'nts-toast',
    templateUrl: 'toast.component.html',
    styleUrls: ['toast.component.scss'],
})
export class NtsToastComponent implements AfterContentInit {

    toastOptions = {};
    msg = '';

    @Output() accept = new EventEmitter();

    constructor(private elementRef: ElementRef) { }

    ngAfterContentInit() { }
    initContent(options) {
        this.toastOptions = options;
    }

    setMessage(msg) {
        this.msg = msg;
    }

    onAccept() {
        this.accept.emit(true);
    }

}
