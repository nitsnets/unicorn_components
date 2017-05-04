import { Directive, ElementRef, Input, OnInit, Renderer } from '@angular/core';

@Directive({
    selector: '[autofocus]'
})
export class NtsAutofocusDirective implements OnInit {
    @Input() autofocus = false;

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer
    ) { }

    ngOnInit() {
        const elm = this.elementRef.nativeElement;
        if (this.autofocus) {
            this.renderer.invokeElementMethod(elm, 'focus', []);

            /* Hack to prevent Firefox put the cursor at the beggining of the input */
            const value = elm.value;
            elm.value = '';
            elm.value = value;
        }
    }
}
