import { AfterContentInit, Component, ContentChild, EventEmitter, Input, OnChanges, Output, HostBinding } from '@angular/core';

import { UniDatagridComponent } from './../../ui/datagrid/datagrid.component';
import { UniFilter } from './../../../models/filter';
import { UniFilterItem } from '../../ui/filters-list/filters-list.component';
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
            name: '',
            icon: '',
            filter: deepClone(filter)
        };
        if (this.filterNameFn) {
            filterItem.name = this.filterNameFn(filter);
        }
        this.filterSave.emit(filterItem);
        this.filtersList.addCustomFilter(filterItem);
    }
    private onSelectFilter(filter: UniFilter) {
        this.filters.filter = deepClone(filter);
        this.filters.doFilter();
    }
    private onAppliedFilter(filter: UniFilter) {
        if (this.filterFn) {
            this.datagrid.applyFilter(filter);
        }
    }
}
