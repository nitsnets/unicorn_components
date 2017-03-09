import { AfterContentInit, Component, ContentChild, Input, TemplateRef } from '@angular/core';

import { NtsDatagridCellDirective } from '../cell/cell-variables.directive';

@Component({
    selector: 'nts-datagrid-column',
    template: '',
})
export class NtsDatagridColumnComponent implements AfterContentInit {
    @Input() title: string = null;
    @Input() field: string = null;
    @Input() width = 1;
    @Input() sortable;
    @Input() highlight;
    @Input() format = 'text';
    @Input() formatOptions: Object = null;

    @ContentChild(NtsDatagridCellDirective) customCellDirective: NtsDatagridCellDirective = null;

    customCell: TemplateRef<any> = null;

    constructor() { }

    ngAfterContentInit() {
        this.customCell = this.customCellDirective ? this.customCellDirective.templateRef : null;
    }
    isSortable(defaultValue: boolean): boolean {
        return this.sortable === true || this.sortable === undefined && defaultValue === true ? true : false;
    }

}
