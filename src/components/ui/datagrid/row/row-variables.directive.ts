import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[rowVariables]'
})
export class NtsDatagridRowDirective {
    constructor(public templateRef: TemplateRef<any>, ) { }
}
