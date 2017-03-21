import { AfterContentInit, Component, ContentChild, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NtsDatagridComponent } from './../../ui/datagrid/datagrid.component';
import { NtsFilter } from '../../ui/filters/filters.component';
import { NtsFilterItem } from '../../ui/filters-list/filters-list.component';
import { NtsFiltersComponent } from './../../ui/filters/filters.component';
import { NtsFiltersListComponent } from './../../ui/filters-list/filters-list.component';
import { deepClone } from '../../../utils';

@Component({
    selector: 'nts-filtered-datagrid',
    templateUrl: './filtered-datagrid.component.html'
})
export class FilteredDatagridComponent implements OnInit, AfterContentInit {

    @ContentChild(NtsDatagridComponent) datagrid: NtsDatagridComponent;
    @ContentChild(NtsFiltersComponent) filters: NtsFiltersComponent;
    @ContentChild(NtsFiltersListComponent) filtersList: NtsFiltersListComponent;

    @Input() filterNameFn: Function;
    @Input() filterFn: Function;

    @Output() filterSave = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    ngAfterContentInit() {
        this.initListeners();
    }

    private initListeners() {
        this.filters.save.subscribe(f => this.onSaveFilter(f));
        this.filters.filterChange.subscribe(f => this.onAppliedFilter(f));
        this.filtersList.filterSelectedChange.subscribe(f => this.onSelectFilter(f));
    }
    private onSaveFilter(filter: NtsFilter) {
        const filterItem: NtsFilterItem = {
            name: '',
            icon: '',
            filter: deepClone(filter)
        };
        if (this.filterNameFn) {
            filterItem.name = this.filterNameFn(filter);
        }
        this.filtersList.addCustomFilter(filterItem);
    }
    private onSelectFilter(filter: NtsFilter) {
        this.filters.filter = deepClone(filter);
        this.filters.doFilter();
    }
    private onAppliedFilter(filter: NtsFilter) {
        if (this.filterFn) {
            this.datagrid.data = this.filterFn(this.datagrid.data, filter);
            this.datagrid.updateData();
            console.log(this.datagrid.data);
        }
    }
}
