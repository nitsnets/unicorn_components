import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[rowVariables]'
})
export class UniDatagridRowDirective {
    constructor(public templateRef: TemplateRef<any>) { }
}
