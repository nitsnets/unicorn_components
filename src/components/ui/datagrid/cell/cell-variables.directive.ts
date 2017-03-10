import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[cellVariables]'
})
export class NtsDatagridCellDirective {
    constructor(public templateRef: TemplateRef<any>, ) { }
}
