import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[cellVariables]'
})
export class NtsDatagridCellDirective {
    constructor(public templateRef: TemplateRef<any>, ) { }
}

/*import { AfterContentInit, ContentChild, Directive, TemplateRef } from '@angular/core';

import { NtsDatagridCellComponent } from './cell.component';
import { NtsDatagridColumnComponent } from './../column/column.component';

@Directive({
    selector: '[cellVariables]'
})
export class NtsDatagridCellDirective implements AfterContentInit {

    @ContentChild(NtsDatagridCellComponent) cellComponent: NtsDatagridColumnComponent = null;

    constructor(public templateRef: TemplateRef<any>) { }

    ngAfterContentInit() {
        console.log(this.cellComponent);
    }
}
*/
