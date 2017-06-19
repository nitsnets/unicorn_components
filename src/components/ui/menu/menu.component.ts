import {
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
} from '@angular/core';

import { UniMenuContainerComponent } from './container/container.component';
import { UniPosition } from '../../../models/types';

@Component({
    selector: 'uni-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.scss'],
})
export class UniMenuComponent {
    @Input() toggle = false;
    @Input() keepOpen = false;
    @Output() openedChange = new EventEmitter();
    @Input() position: UniPosition = null;
    calculatedPosition: UniPosition = null;

    @ContentChild(UniMenuContainerComponent) menuScope: UniMenuContainerComponent;

    opened = false;

    constructor(private elementRef: ElementRef) { }

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
        if (!this.menuScope || this.keepOpen === false) { return false; }
        return this.menuScope.elementRef.nativeElement.contains(element);
    }
}

@Directive({
    selector: '[ntsMenuTrigger]'
})
export class UniMenuTriggerDirective implements OnDestroy {
    private openedByFocus = false;
    private closeMenuOnOutsideClick = (event: MouseEvent) => this.close(event);

    constructor( @Host() public menu: UniMenuComponent, private elementRef: ElementRef) { }

    @HostListener('click', ['$event']) openMenu(ev: MouseEvent) {
        if (this.openedByFocus) {
            this.openedByFocus = false;
            return;
        }
        if (this.menu.opened && this.menu.toggle) {
            this.menu.close();
            document.removeEventListener('click', this.closeMenuOnOutsideClick);
        } else {
            this.menu.open(ev.clientX);
            document.addEventListener('click', this.closeMenuOnOutsideClick, true);
        }
    }

    @HostListener('focus') onFocus() {
        this.openedByFocus = true;
        this.menu.open();
        document.addEventListener('click', this.closeMenuOnOutsideClick, true);
    }

    @HostListener('blur', ['$event']) onBlur(event: FocusEvent) {
        if (event.relatedTarget &&
            !this.menu.isInClosableZone(<HTMLElement>event.relatedTarget) &&
            event.relatedTarget !== this.elementRef.nativeElement) {

            this.menu.close();
            document.removeEventListener('click', this.closeMenuOnOutsideClick);
        }
    }
    ngOnDestroy() {
        document.removeEventListener('click', this.closeMenuOnOutsideClick);
    }
    private close(event: Event) {
        if (!this.menu.isInClosableZone(<HTMLElement>event.target)
            && event.target !== this.elementRef.nativeElement
            && !this.elementRef.nativeElement.contains(event.target)) {
            this.menu.close();
            document.removeEventListener('click', this.closeMenuOnOutsideClick);
        }
    }
}
