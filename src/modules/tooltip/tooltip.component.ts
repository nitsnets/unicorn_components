import {
    Component, Output, EventEmitter, ElementRef, AfterContentInit
} from '@angular/core';

@Component({
    selector: 'nts-tooltip',
    templateUrl: 'tooltip.component.html',
    styleUrls: ['tooltip.component.scss'],
})
export class NtsTooltipComponent implements AfterContentInit {

    animateIn = false;
    animateOut = false;

    tooltipOptions = {};
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

    initContent(options) {
        this.tooltipOptions = options;
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
