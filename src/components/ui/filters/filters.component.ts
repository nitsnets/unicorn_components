import { AfterContentInit, Component, ContentChild, ContentChildren, EventEmitter, Input, OnChanges, Output, QueryList } from '@angular/core';
import { deepClone, objEmpty, objEquals } from '../../../utils';

import { NtsButtonToggleComponent } from './../../forms/button-toggle/button-toggle.component';
import { NtsCheckboxComponent } from './../../forms/checkbox/checkbox.component';
import { NtsDatePickerComponent } from '../../forms/date-picker/date-picker.component';
import { NtsFiltersAdvancedComponent } from './filters-advanced/filters-advanced.component';
import { NtsFiltersMainComponent } from './filters-main/filters-main.component';
import { NtsInputBaseComponent } from '../../base/input-base.component';
import { NtsInputComponent } from '../../forms/input/input.component';
import { NtsRadioComponent } from '../../forms/radio/radio.component';
import { NtsSelectComponent } from '../../forms/select/select.component';
import { NtsTimePickerComponent } from './../../forms/time-picker/time-picker.component';
import { NtsToggleComponent } from './../../forms/toggle/toggle.component';

@Component({
    selector: 'nts-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class NtsFiltersComponent implements AfterContentInit, OnChanges {

    @Input() autoFilter: 'onChange' | 'onBlur' | false = false;
    @Input() persistent: string = null;
    @Input() savable = false;
    @Input() clearable = true;

    @Input() button: boolean;
    @Input() buttonColor = 'primary';
    @Input() buttonLabel = 'Apply';
    @Input() buttonIcon = null;

    @ContentChild(NtsFiltersAdvancedComponent) advFiltersComp: NtsFiltersAdvancedComponent;
    @ContentChild(NtsFiltersMainComponent) mainFiltersComp: NtsFiltersMainComponent;

    @ContentChildren(NtsInputComponent, { descendants: true }) inputsList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsSelectComponent, { descendants: true }) selectsList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsCheckboxComponent, { descendants: true }) checkboxList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsButtonToggleComponent, { descendants: true }) btnToggleList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsDatePickerComponent, { descendants: true }) datepickerList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsRadioComponent, { descendants: true }) radioList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsToggleComponent, { descendants: true }) toggleList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsTimePickerComponent, { descendants: true }) timepickerList: QueryList<NtsInputBaseComponent>;

    mainFilters: NtsInputBaseComponent[];
    advFilters: NtsInputBaseComponent[];
    filters: NtsInputBaseComponent[];

    showButton = true;
    showAdvanced = false;

    defaultFilter: { [key: string]: any } = {};
    _filter: { [key: string]: any } = {};

    get filter(): { [key: string]: any } {
        return this._filter;
    }
    @Input('filter')
    set filter(value: { [key: string]: any }) {
        this._filter = value;
        this.updateNtsModels();
    }

    @Output() filterChange = new EventEmitter();
    @Output() save = new EventEmitter();

    /**
     * The number of button on the right side of the filters
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
            return console.error('When using <nts-filters-advanced> you must include <nts-filters-main> beside it');
        }
        if (this.advFilters && this.advFilters.length && this.mainFilters.length + this.advFilters.length !== this.filters.length) {
            return console.error('When using <nts-filters-main> & <nts-filters-advanced> you cannot include inputs at <nts-filters> root');
        }

        this.filters.forEach(f => {
            f.ntsModelChange.subscribe(value => this.onNtsModelChange(f.name, value, f.constructor.name));
            f.ntsBlur.subscribe(() => this.onFilterBlur(f.name, f.constructor.name));
            if (f.value) {
                this.defaultFilter[f.name] = f.value;
            }
        });

        this.applyDefault();

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
        this.save.emit(this.filter);
    }
    isDefault(): boolean {
        return objEquals(this.filter, this.defaultFilter);
    }
    isEmpty(): boolean {
        return objEmpty(this.filter);
    }
    doFilter() {
        this.filterChange.emit(this.filter);
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
    private onNtsModelChange(field: string, value: any, type: string) {
        this.filter[field] = value;
        if (this.autoFilter === 'onChange') {
            this.doFilter();
        }
    }
    private setFilterField(field: string, value: any) {
        const fil: NtsInputBaseComponent = this.filters.find(f => f.name === field);
        if (!fil) { return; }
        this.filter[field] = value;
        fil.ntsModel = value;
    }
    private updateNtsModels() {
        if (this.filters && (!this.advFilters || !this.advFilters.length) && (!this.mainFilters || !this.mainFilters.length)) {
            this.filters.forEach(f => f.ntsModel = this.filter[f.name]);
        } else if (this.advFilters && this.mainFilters) {
            let anyAdvanced = false;
            this.advFilters.forEach(f => {
                f.ntsModel = this.filter[f.name];
                if (this.filter[f.name] !== f.value) { anyAdvanced = true; }
            });
            this.mainFilters.forEach(f => f.ntsModel = this.filter[f.name]);
            this.showAdvanced = anyAdvanced;
        }
    }
}
