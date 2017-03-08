import { Component, Input } from '@angular/core';

@Component({
    selector: 'nts-datagrid-column',
    template: '',
})
export class NtsDatagridColumnComponent {
    @Input() title: string = null;
    @Input() field: string = null;
    @Input() sortable;
    @Input() format = 'text';
    @Input() formatOptions: Object = null;

    constructor() { }

}
