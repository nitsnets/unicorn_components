import { AfterViewInit, Directive, TemplateRef, ViewChild } from '@angular/core';

import { NtsDatagridRowComponent } from './row.component';

@Directive({
    selector: '[rowVariables]'
})
export class NtsDatagridRowDirective implements AfterViewInit {

    @ViewChild(NtsDatagridRowComponent) rowView = NtsDatagridRowComponent;

    constructor(public templateRef: TemplateRef<any>) { }

    ngAfterViewInit() { }
}
