import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
    selector: '[clickOutside]'
})
export class ClickOutsideDirective {
    @Output() public clickOutside = new EventEmitter();

    constructor(private elementRef: ElementRef) { }

    @HostListener('document:click', ['$event'])
    public onClick(event) {
        const clickedInside = this.elementRef.nativeElement.contains(event.target);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    }
}
