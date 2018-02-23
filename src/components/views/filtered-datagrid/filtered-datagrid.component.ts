import { AfterContentInit, Component, ContentChild, EventEmitter, HostBinding, Input, OnChanges, Output } from '@angular/core';

import { UniDatagridComponent } from './../../ui/datagrid/datagrid.component';
import { UniFilter } from './../../../models/filter';
import { UniFilterItem } from './../../../models/filter-item';
import { UniFiltersComponent } from './../../ui/filters/filters.component';
import { UniFiltersListComponent } from './../../ui/filters-list/filters-list.component';
import { deepClone } from '../../../utils';

@Component({
    selector: 'uni-filtered-datagrid',
    templateUrl: './filtered-datagrid.component.html'
})
export class FilteredDatagridComponent implements AfterContentInit, OnChanges {

    @HostBinding('class.uni-filtered-datagrid') componentClass = true;

    @ContentChild(UniDatagridComponent) datagrid: UniDatagridComponent;
    @ContentChild(UniFiltersComponent) filters: UniFiltersComponent;
    @ContentChild(UniFiltersListComponent) filtersList: UniFiltersListComponent;

    @Input() filterNameFn: Function;
    @Input() filterFn: Function;

    @Output() filterSave = new EventEmitter();

    @Input() hasHeader = false;
    @Input() hasSubheader = false;
    @Input() hasSubheaderAndTabs = false;
    @Input() fullWidth = false;

    constructor() { }

    ngOnChanges(changes) {
        if (changes.filterFn && this.datagrid) {
            this.datagrid.filterFn = this.filterFn;
        }
    }

    ngAfterContentInit() {
        this.initListeners();
    }

    private initListeners() {
        this.datagrid.filterable = true;
        this.datagrid.filterFn = this.filterFn;
        this.filters.save.subscribe(f => this.onSaveFilter(f));
        this.filters.filterChange.subscribe(f => this.onAppliedFilter(f));
        this.filtersList.filterSelectedChange.subscribe(f => this.onSelectFilter(f));
    }
    private onSaveFilter(filter: UniFilter) {
        const filterItem: UniFilterItem = {
            label: '',
            icon: '',
            filter: deepClone(filter)
        };
        if (this.filterNameFn) {
            filterItem.label = this.filterNameFn(filter);
        }
        this.filterSave.emit(filterItem);
        this.filtersList.addCustomFilter(filterItem);
    }
    private onSelectFilter(filter: UniFilter) {
        console.log(filter);
        this.filters.filter = deepClone(filter);
        this.filters.doFilter();
    }
    private onAppliedFilter(filter: UniFilter) {
        if (this.filterFn) {
            this.datagrid.applyFilter(filter);
        }
    }
}
