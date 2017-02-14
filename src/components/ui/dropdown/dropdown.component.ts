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

import { NtsDropdownContainerComponent } from './container/container.component';

export type NtsDropdownPosition = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';

@Component({
    selector: 'nts-dropdown',
    templateUrl: 'dropdown.component.html',
    styleUrls: ['dropdown.component.scss'],
})
export class NtsDropdownComponent {
    @Input() toggle = false;
    @Input() keepOpen = false;
    @Output() openedChange = new EventEmitter();
    @Input() position: NtsDropdownPosition = null;
    calculatedPosition: NtsDropdownPosition = null;

    @ContentChild(NtsDropdownContainerComponent) dropdownScope: NtsDropdownContainerComponent;

    opened: boolean = false;

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
        if (!this.dropdownScope || this.keepOpen === false) { return false; }
        return this.dropdownScope.elementRef.nativeElement.contains(element);
    }
}

@Directive({
    selector: '[ntsDropdownTrigger]'
})
export class NtsDropdownTriggerDirective implements OnDestroy {
    private openedByFocus: boolean = false;
    private closeDropdownOnOutsideClick = (event: MouseEvent) => this.close(event);

    constructor( @Host() public dropdown: NtsDropdownComponent, private elementRef: ElementRef) { }

    @HostListener('click', ['$event']) openDropdown(ev: MouseEvent) {
        if (this.openedByFocus) {
            this.openedByFocus = false;
            return;
        }
        if (this.dropdown.opened && this.dropdown.toggle) {
            this.dropdown.close();
            document.removeEventListener('click', this.closeDropdownOnOutsideClick);
        } else {
            this.dropdown.open(ev.clientX);
            document.addEventListener('click', this.closeDropdownOnOutsideClick, true);
        }
    }

    @HostListener('focus') onFocus() {
        this.openedByFocus = true;
        this.dropdown.open();
        document.addEventListener('click', this.closeDropdownOnOutsideClick, true);
    }

    @HostListener('blur', ['$event']) onBlur(event: FocusEvent) {
        if (event.relatedTarget &&
            !this.dropdown.isInClosableZone(<HTMLElement>event.relatedTarget) &&
            event.relatedTarget !== this.elementRef.nativeElement) {

            this.dropdown.close();
            document.removeEventListener('click', this.closeDropdownOnOutsideClick);
        }
    }
    ngOnDestroy() {
        document.removeEventListener('click', this.closeDropdownOnOutsideClick);
    }
    private close(event: Event) {
        if (!this.dropdown.isInClosableZone(<HTMLElement>event.target)
            && event.target !== this.elementRef.nativeElement
            && !this.elementRef.nativeElement.contains(event.target)) {
            this.dropdown.close();
            document.removeEventListener('click', this.closeDropdownOnOutsideClick);
        }
    }
}
