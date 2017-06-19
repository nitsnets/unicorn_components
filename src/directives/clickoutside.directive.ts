import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
    selector: '[clickOutside]'
})
export class UniClickOutsideDirective {
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
