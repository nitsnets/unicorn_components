import { AfterContentInit, Component, ContentChild, Input, OnChanges, TemplateRef, HostBinding } from '@angular/core';

import { UniDatagridCellDirective } from '../cell/cell-variables.directive';
import { findByPath } from '../../../../utils';

@Component({
    selector: 'uni-datagrid-column',
    template: '',
})
export class UniDatagridColumnComponent implements AfterContentInit, OnChanges {

    @HostBinding('class.uni-datagrid-column') componentClass = true;
    @Input() title: string = null;
    @Input() field: string = null;
    @Input() cellClass: string = null;
    @Input() width = 1;
    @Input() sortable;
    @Input() sort: 'asc' | 'desc';
    @Input() highlightCell;
    @Input() showLabels;
    @Input() format = 'span';
    @Input() formatOptions: Object = null;
    @Input() clickPropagation = true;

    @ContentChild(UniDatagridCellDirective) customCellDirective: UniDatagridCellDirective = null;

    customCell: TemplateRef<any> = null;
    path: string[];

    constructor() { }

    ngAfterContentInit() {
        this.customCell = this.customCellDirective ? this.customCellDirective.templateRef : null;
    }
    ngOnChanges(changes) {
        if (changes.field && this.field) {
            this.path = this.field.split('.');
        }
    }

    getValue(obj: any) {
        if (this.path && this.path.length) {
            return findByPath(obj, this.path);
        } else { return obj[this.field]; }
    }

    /**
     *
     *
     * @param {boolean} defaultValue
     * @returns {boolean}
     *
     * @memberOf UniDatagridColumnComponent
     */
    isSortable(defaultValue: boolean): boolean {
        return this.sortable === true || this.sortable === undefined && defaultValue === true ? true : false;
    }

}
