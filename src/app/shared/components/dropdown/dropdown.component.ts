import {
    Component, Directive, Input, Output, EventEmitter, ElementRef,
    ContentChild, Host, HostListener, OnDestroy
} from '@angular/core';
import { GoDropdownContainerComponent } from './container/container.component';

@Component({
    selector: 'go-dropdown',
    templateUrl: 'dropdown.component.html',
    styleUrls: ['dropdown.component.scss'],
})
export class GoDropdownComponent {
    @Input() toggle = false;
    @Input() keepOpen = false;
    @Output() openedChange = new EventEmitter();

    @ContentChild(GoDropdownContainerComponent) dropdownScope: GoDropdownContainerComponent;

    opened: boolean = false;

    constructor(private elementRef: ElementRef) { }

    open() {
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
    selector: '[goDropdownTrigger]'
})
export class GoDropdownTriggerDirective implements OnDestroy {
    private openedByFocus: boolean = false;
    private closeDropdownOnOutsideClick = (event: MouseEvent) => this.close(event);

    constructor( @Host() public dropdown: GoDropdownComponent, private elementRef: ElementRef) { }

    @HostListener('click') openDropdown() {
        if (this.openedByFocus) {
            this.openedByFocus = false;
            return;
        }
        if (this.dropdown.opened && this.dropdown.toggle) {
            this.dropdown.close();
            document.removeEventListener('click', this.closeDropdownOnOutsideClick);
        } else {
            this.dropdown.open();
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
