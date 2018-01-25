import {
    AfterContentInit,
    Component,
    ElementRef,
    EventEmitter,
    HostBinding,
    Output,
} from '@angular/core';

export interface ToastOptions { showClose: boolean; }
@Component({
    selector: 'uni-toast',
    templateUrl: 'toast.component.html',
    styleUrls: ['toast.component.scss'],
})
export class UniToastComponent implements AfterContentInit {

    @HostBinding('class.uni-toast') componentClass = true;
    animateIn = false;
    animateOut = false;
    toastOptions: ToastOptions;
    msg = '';

    @Output() accept = new EventEmitter<any>();

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
