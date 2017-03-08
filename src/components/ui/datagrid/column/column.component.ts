import { AfterContentInit, Component, ContentChild, Input } from '@angular/core';

import { NtsDatagridCellDirective } from '../cell/cell-variables.directive';

@Component({
    selector: 'nts-datagrid-column',
    template: '',
})
export class NtsDatagridColumnComponent implements AfterContentInit {
    @Input() title: string = null;
    @Input() field: string = null;
    @Input() sortable;
    @Input() format = 'text';
    @Input() formatOptions: Object = null;

    @ContentChild(NtsDatagridCellDirective) customCellDirective: NtsDatagridCellDirective = null;

    customCell = null;

    constructor() { }

    ngAfterContentInit() {
        this.customCell = this.customCellDirective ? this.customCellDirective.templateRef : null;
    }

}
