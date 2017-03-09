import {
    AfterContentInit,
    Component,
    ContentChild,
    ContentChildren,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    QueryList,
    TemplateRef,
} from '@angular/core';

import { NtsDatagridColumnComponent } from './column/column.component';
import { NtsDatagridRowDirective } from './row/row-variables.directive';
import { uuid } from '../../../utils';

export interface NtsDataOrder { field: string; dir: boolean; };

@Component({
    selector: 'nts-datagrid',
    templateUrl: './datagrid.component.html'
})
export class NtsDatagridComponent implements AfterContentInit, OnChanges {

    dataSelected: string[] = [];
    dataSource: { [key: string]: any } = {};
    dataView: string[] = [];

    @Input() data: Array<Object> = null;
    @Output() dataChange = new EventEmitter<Array<Object>>();

    @Input() highlight = false;
    @Input() selectable = false;
    @Input() sortable = true;
    @Input() orderLocal = true;
    @Input() order: NtsDataOrder = { field: null, dir: false };
    @Output() orderChange = new EventEmitter<NtsDataOrder>();
    orderKey = null;

    @Output() cellClick = new EventEmitter();

    @ContentChildren(NtsDatagridColumnComponent) columnsComponents: QueryList<NtsDatagridColumnComponent> = null;
    @ContentChild(NtsDatagridRowDirective) customRowDirective: NtsDatagridRowDirective = null;

    columns: NtsDatagridColumnComponent[];
    customRow: TemplateRef<Object>;

    ngOnChanges(changes) {
        if (changes.data) { this.updateData(); }
    }

    ngAfterContentInit() {
        this.columns = this.columnsComponents.toArray();
        this.customRow = this.customRowDirective ? this.customRowDirective.templateRef : null;
    }

    onOrderBy(column) {
        if (column.sortable === false || column.sortable === undefined && this.sortable === false) { return; }
        if (this.order.field === column.field) {
            this.order.dir = !this.order.dir;
        } else {
            this.order.field = column.field;
            this.order.dir = false;
        }
        if (this.orderLocal) {
            this.orderKey = (this.order.dir ? '+' : '-') + this.order.field;
            this.refreshAndEmitData();
        }
        this.orderChange.emit(this.order);
    }

    allSelected(): boolean {
        return this.dataSelected.length === this.dataView.length;
    }

    selectAll() {
        this.dataSelected = [...this.dataView];
    }

    isSelected(id: string): boolean {
        return this.dataSelected.indexOf(id) !== -1;
    }
    selectItem(id: string, value: boolean = true) {
        const index = this.dataSelected.indexOf(id);
        if (value && index === -1) {
            this.dataSelected.push(id);
        } else if (!value && index !== -1) {
            this.dataSelected.splice(index, 1);
        }
    }

    private refreshAndEmitData() {
        this.data = [...this.data];
        this.dataChange.emit(this.data);
    }

    private updateData() {
        const dataSource = {};
        const dataView = [];

        if (this.data && this.data.length) {
            this.data.forEach(el => {
                const id = el['id'] || uuid();
                dataView.push(id);
                el['id'] = id;
                dataSource[id] = el;
            });
        }

        this.dataSelected = [];
        this.dataSource = dataSource;
        this.dataView = dataView;
    }
}
