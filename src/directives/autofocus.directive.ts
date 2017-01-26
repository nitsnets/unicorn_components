import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
    selector: '[autofocus]'
})
export class AutofocusDirective {
    @Input() autofocus = false;
    constructor(private elementRef: ElementRef, private renderer: Renderer) {
    }
    ngOnInit() {
        let elm = this.elementRef.nativeElement;
        if (this.autofocus) {
            this.renderer.invokeElementMethod(elm, 'focus', []);
            /* Trick to prevent Firefox put the cursor at the beggining of the input */
            let value = elm.value;
            elm.value = '';
            elm.value = value;
        }
    }
}
