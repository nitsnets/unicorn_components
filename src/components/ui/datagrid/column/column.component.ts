import { Component, Input } from '@angular/core';

@Component({
    selector: 'nts-datagrid-column',
    templateUrl: 'column.component.html',
    styleUrls: ['column.component.scss']
})
export class NtsDatagridColumnComponent {

    @Input('column')
    set column(value: Object) {
        this.title = value['title'];
        this.field = value['field'];
        this.format = value['format'];
        this.formatOptions = value['formatOptions'];
    }
    @Input() title: string = null;
    @Input() field: string = null;
    @Input() format = 'text';
    @Input() formatOptions: Object = null;

    constructor() { }

}
