import {
    AfterContentInit,
    Component,
    ContentChild,
    ContentChildren,
    EventEmitter,
    HostBinding,
    Input,
    OnChanges,
    Output,
    QueryList,
} from '@angular/core';
import { deepClone, objEmpty, objEquals } from '../../../utils';

import { UniButtonToggleComponent } from './../../forms/button-toggle/button-toggle.component';
import { UniCheckboxComponent } from './../../forms/checkbox/checkbox.component';
import { UniDatePickerComponent } from '../../forms/date-picker/date-picker.component';
import { UniFilter } from '../../../models/filter';
import { UniFiltersAdvancedComponent } from './filters-advanced/filters-advanced.component';
import { UniFiltersMainComponent } from './filters-main/filters-main.component';
import { UniInputBaseComponent } from '../../base/input-base/input-base.component';
import { UniInputComponent } from '../../forms/input/input.component';
import { UniRadioComponent } from '../../forms/radio/radio.component';
import { UniSelectComponent } from '../../forms/select/select.component';
import { UniTimePickerComponent } from './../../forms/time-picker/time-picker.component';
import { UniToggleComponent } from './../../forms/toggle/toggle.component';

@Component({
    selector: 'uni-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class UniFiltersComponent implements AfterContentInit, OnChanges {

    @HostBinding('class.uni-filters') componentClass = true;

    @Input() autoFilter: 'onChange' | 'onBlur' | false = false;
    @Input() defaultFilter: UniFilter = {};
    @Input() persistent: string = null;
    @Input() savable = false;
    @Input() clearable = true;

    @Input() button: boolean;
    @Input() buttonColor = 'primary';
    @Input() buttonLabel = 'Apply';
    @Input() buttonIcon = null;

    @ContentChild(UniFiltersAdvancedComponent) advFiltersComp: UniFiltersAdvancedComponent;
    @ContentChild(UniFiltersMainComponent) mainFiltersComp: UniFiltersMainComponent;

    @ContentChildren(UniInputComponent, { descendants: true }) inputsList: QueryList<UniInputBaseComponent>;
    @ContentChildren(UniSelectComponent, { descendants: true }) selectsList: QueryList<UniInputBaseComponent>;
    @ContentChildren(UniCheckboxComponent, { descendants: true }) checkboxList: QueryList<UniInputBaseComponent>;
    @ContentChildren(UniButtonToggleComponent, { descendants: true }) btnToggleList: QueryList<UniInputBaseComponent>;
    @ContentChildren(UniDatePickerComponent, { descendants: true }) datepickerList: QueryList<UniInputBaseComponent>;
    @ContentChildren(UniRadioComponent, { descendants: true }) radioList: QueryList<UniInputBaseComponent>;
    @ContentChildren(UniToggleComponent, { descendants: true }) toggleList: QueryList<UniInputBaseComponent>;
    @ContentChildren(UniTimePickerComponent, { descendants: true }) timepickerList: QueryList<UniInputBaseComponent>;

    mainFilters: UniInputBaseComponent[];
    advFilters: UniInputBaseComponent[];
    filters: UniInputBaseComponent[];

    showButton = true;
    showAdvanced = false;


    private _filter: UniFilter;
    get filter(): UniFilter {
        return this._filter;
    }
    @Input('filter')
    set filter(value: UniFilter) {
        this._filter = value;
        this.updateUniModels();
    }

    @Output() filterChange: EventEmitter<UniFilter> = new EventEmitter();
    @Output() save: EventEmitter<UniFilter> = new EventEmitter();

    /**
     * The number of buttons on the right side of the filters
     *
     * @type number
     * @default 2
     */
    optionsCount = 2;

    ngAfterContentInit() {

        this.filters = [
            ...this.radioList.toArray(),
            ...this.toggleList.toArray(),
            ...this.inputsList.toArray(),
            ...this.selectsList.toArray(),
            ...this.checkboxList.toArray(),
            ...this.btnToggleList.toArray(),
            ...this.datepickerList.toArray(),
            ...this.timepickerList.toArray()
        ];
        this.mainFilters = this.mainFiltersComp ? this.mainFiltersComp.filters : null;
        this.advFilters = this.advFiltersComp ? this.advFiltersComp.filters : null;

        if (this.advFilters && this.advFilters.length && (!this.mainFilters || !this.mainFilters.length)) {
            return console.error('When using <uni-filters-advanced> you must include <uni-filters-main> beside it');
        }
        if (
            this.advFilters
            && this.advFilters.length
            && this.mainFilters.length + this.advFilters.length !== this.filters.length
        ) {
            return console.error('You cannot include inputs at <uni-filters> root when using mainand advanced filters');
        }

        this.filters.forEach(f => {
            f.modelChange.subscribe(value => this.onUniModelChange(f.name, value, f.constructor.name));
            f.uniBlur.subscribe(() => this.onFilterBlur(f.name, f.constructor.name));
            if (!this.defaultFilter[f.name] && f.value) {
                this.defaultFilter[f.name] = f.value;
            }
        });

        if (!this.filter) {
            this.applyDefault();
        } else {
            this.updateUniModels();
        }
        if (this.persistent) {
            this.restoreFilter();
        }
    }
    ngOnChanges(changes) {
        if (changes.persistent && this.persistent && this.filters) {
            this.restoreFilter();
        }
        if (changes.autoFilter || changes.clearable || changes.savable || this.showButton) {
            let options = 0;
            if (this.autoFilter === false && this.showButton !== false) { options++; }
            if (this.clearable === true) { options++; }
            if (this.savable === true) { options++; }
            this.optionsCount = options;
        }
        if (changes.autoFilter && this.button === undefined) {
            this.showButton = this.autoFilter === false ? true : false;
        }
    }
    onFilterBlur(field: string, componentName: string) {
        if (this.autoFilter === 'onBlur') {
            this.doFilter();
        }
    }
    onClear() {
        this.applyDefault();
        this.doFilter();
    }
    onSave() {
        this.save.emit(deepClone(this.filter));
    }
    isDefault(): boolean {
        return objEquals(this.filter, this.defaultFilter);
    }
    isEmpty(): boolean {
        return objEmpty(this.filter);
    }
    doFilter() {
        this.filterChange.emit(deepClone(this.filter));
        if (this.persistent) { this.storeFilter(); }
        console.log('Do filter', this.filter);
    }

    private applyDefault() {
        this.filter = deepClone(this.defaultFilter);
    }
    private storeFilter() {
        localStorage.setItem(this.persistent, JSON.stringify(this.filter));
    }
    private restoreFilter() {
        const restored = localStorage.getItem(this.persistent);
        if (restored) {
            this.filter = JSON.parse(restored);
        }
    }
    private onUniModelChange(field: string, value: any, type: string) {
        this.filter[field] = value;
        if (this.autoFilter === 'onChange') {
            this.doFilter();
        }
    }
    private updateUniModels() {
        if (
            this.filters
            && (!this.advFilters || !this.advFilters.length)
            && (!this.mainFilters || !this.mainFilters.length)
        ) {
            this.filters.forEach(f => f.model = this.filter[f.name]);
        } else if (this.advFilters && this.mainFilters) {
            let anyAdvanced = false;
            this.advFilters.forEach(f => {
                f.model = this.filter[f.name];
                if (this.filter[f.name] !== f.value) { anyAdvanced = true; }
            });
            this.mainFilters.forEach(f => f.model = this.filter[f.name]);
            this.showAdvanced = anyAdvanced;
        }
    }
}
