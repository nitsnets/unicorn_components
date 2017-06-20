import {
    AfterContentInit,
    Component,
    ElementRef,
    EventEmitter,
    Output,
} from '@angular/core';

export interface ToastOptions { showClose: boolean; }
@Component({
    selector: 'uni-toast',
    templateUrl: 'toast.component.html',
    styleUrls: ['toast.component.scss'],
})
export class UniToastComponent implements AfterContentInit {

    animateIn = false;
    animateOut = false;
    toastOptions: ToastOptions = null;
    msg = '';

    @Output() accept = new EventEmitter();

    constructor(private elementRef: ElementRef) { }

    ngAfterContentInit() {
        this.animateIn = false;
        setTimeout(() => this.onEndAnimateOpen(), 50);
    }

    onEndAnimateOpen() {
        this.animateIn = true;
    }

    initContent(options: ToastOptions) {
        this.toastOptions = options;
    }

    setMessage(msg: string) {
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
