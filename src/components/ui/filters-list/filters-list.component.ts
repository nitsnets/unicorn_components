import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NtsFilter } from '../filters/filters.component';
import { NtsListItem } from './../list/list.component';

export interface NtsFilterItem extends NtsListItem {
    filter: NtsFilter;
};

@Component({
    selector: 'nts-filters-list',
    templateUrl: './filters-list.component.html',
    styleUrls: ['./filters-list.component.scss']
})
export class NtsFiltersListComponent implements OnInit {

    @Input() mainTitle: string;
    @Input() mainFilters: NtsFilterItem[];
    @Output() mainFiltersChange: EventEmitter<NtsFilterItem[]> = new EventEmitter();

    @Input() customTitle: string;
    @Input() customFilters: NtsFilterItem[];
    @Output() customFiltersChange: EventEmitter<NtsFilterItem[]> = new EventEmitter();

    @Input() filterSelected: NtsFilter;
    @Output() filterSelectedChange: EventEmitter<NtsFilter> = new EventEmitter();

    get isEmpty() {
        return (!this.mainFilters || this.mainFilters.length === 0) &&
            (!this.customFilters || this.customFilters.length === 0);
    }

    constructor() { }

    ngOnInit() {

    }

    onFilterSelected(filterItem: NtsFilterItem) {
        this.filterSelected = filterItem;
        this.filterSelectedChange.emit(filterItem.filter);
    }
    addCustomFilter(filterItem: NtsFilterItem) {
        this.customFilters = this.customFilters || [];
        this.customFilters = [...this.customFilters, filterItem];
        this.customFiltersChange.emit(this.customFilters);
    }
}
