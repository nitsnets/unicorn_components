import {
    AfterContentInit,
    Component,
    ContentChild,
    Directive,
    ElementRef,
    EventEmitter,
    Host,
    HostListener,
    Input,
    OnDestroy,
    Output,
    HostBinding,
} from '@angular/core';

import { OnChanges } from '@angular/core';
import { UniPopupContainerComponent } from './container/container.component';

export type UniPopupPosition = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';

@Component({
    selector: 'uni-popup',
    templateUrl: 'popup.component.html',
    styleUrls: ['popup.component.scss'],
})
export class UniPopupComponent implements AfterContentInit, OnChanges {

    @HostBinding('class.uni-popup') componentClass = true;
    @Input() toggle = false;
    @Input() keepOpen = true;
    @Input() opened = false;
    @Input() closable = true;
    @Output() openedChange = new EventEmitter();
    @Input() position: UniPopupPosition = null;
    calculatedPosition: UniPopupPosition = null;

    @ContentChild(UniPopupContainerComponent) popupScope: UniPopupContainerComponent;

    constructor(private elementRef: ElementRef) { }

    ngOnChanges(changes) {
        if (changes['closable']) {
            this.popupScope.closable = this.closable;
        }
    }
    ngAfterContentInit() {
        this.popupScope.closable = this.closable;
        this.popupScope.close.subscribe(_ => this.close());
    }

    open(x = null) {
        if (x) {
            this.calculatedPosition = x > document.documentElement.clientWidth / 2 ? 'bottom-left' : 'bottom-right';
        }
        this.opened = true;
        this.openedChange.emit(true);
    }
    close() {
        this.opened = false;
        this.openedChange.emit(false);
    }
    isInClosableZone(element: HTMLElement) {
        if (!this.popupScope || this.keepOpen === false) { return false; }
        return this.popupScope.elementRef.nativeElement.contains(element);
    }
}

@Directive({
    selector: '[uniPopupTrigger]'
})
export class UniPopupTriggerDirective implements OnDestroy {
    private openedByFocus = false;
    private closePopupOnOutsideClick = (event: MouseEvent) => this.close(event);

    constructor( @Host() public popup: UniPopupComponent, private elementRef: ElementRef) { }

    @HostListener('click', ['$event']) openPopup(ev: MouseEvent) {
        if (this.openedByFocus) {
            this.openedByFocus = false;
            return;
        }
        if (this.popup.opened && this.popup.toggle) {
            this.popup.close();
            document.removeEventListener('click', this.closePopupOnOutsideClick);
        } else {
            this.popup.open(ev.clientX);
            document.addEventListener('click', this.closePopupOnOutsideClick, true);
        }
    }

    @HostListener('blur', ['$event']) onBlur(event: FocusEvent) {
        if (event.relatedTarget &&
            !this.popup.isInClosableZone(<HTMLElement>event.relatedTarget) &&
            event.relatedTarget !== this.elementRef.nativeElement) {

            this.popup.close();
            document.removeEventListener('click', this.closePopupOnOutsideClick);
        }
    }
    ngOnDestroy() {
        document.removeEventListener('click', this.closePopupOnOutsideClick);
    }
    private close(event: Event) {
        if (!this.popup.isInClosableZone(<HTMLElement>event.target)
            && event.target !== this.elementRef.nativeElement
            && !this.elementRef.nativeElement.contains(event.target)) {
            this.popup.close();
            document.removeEventListener('click', this.closePopupOnOutsideClick);
        }
    }
}
