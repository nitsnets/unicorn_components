import {
    Component, Output, EventEmitter, ElementRef, AfterContentInit
} from '@angular/core';

@Component({
    selector: 'nts-toast',
    templateUrl: 'toast.component.html',
    styleUrls: ['toast.component.scss'],
})
export class NtsToastComponent implements AfterContentInit {

    animateIn = false;
    animateOut = false;
    toastOptions = {};
    msg = '';

    @Output() accept = new EventEmitter();

    constructor(private elementRef: ElementRef) { }

    ngAfterContentInit() {
        this.animateIn = false;
        setTimeout( () => this.onEndAnimateOpen(), 50);
    }

    onEndAnimateOpen() {
        this.animateIn = true;
    }

    initContent(options) {
        this.toastOptions = options;
    }

    setMessage(msg) {
        this.msg = msg;
    }

    clickClose() {
        this.accept.emit(true);
    }

    close() {
        this.animateIn = false;
        this.animateOut = true;
    }


}
