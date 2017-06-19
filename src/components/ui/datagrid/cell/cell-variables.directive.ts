import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[cellVariables]'
})
export class UniDatagridCellDirective {
    constructor(public templateRef: TemplateRef<any>, ) { }
}
