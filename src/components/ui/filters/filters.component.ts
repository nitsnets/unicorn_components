import { AfterContentInit, Component, ContentChild, ContentChildren, Input, QueryList } from '@angular/core';

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
export class NtsFiltersComponent implements AfterContentInit {

    @Input() autofilter: 'onChange' | 'onBlur' | false = false;
    @Input() persistent: string = null;
    @Input() savable = false;
    @Input() clearable = false;

    @ContentChild(NtsFiltersAdvancedComponent) advFiltersComp: NtsFiltersAdvancedComponent;
    @ContentChild(NtsFiltersMainComponent) mainFiltersComp: NtsFiltersMainComponent;

    @ContentChildren(NtsInputComponent) inputsList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsSelectComponent) selectsList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsCheckboxComponent) checkboxList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsButtonToggleComponent) btnToggleList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsDatePickerComponent) datepickerList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsRadioComponent) radioList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsToggleComponent) toggleList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsTimePickerComponent) timepickerList: QueryList<NtsInputBaseComponent>;

    mainFilters: NtsInputBaseComponent[];
    advFilters: NtsInputBaseComponent[];

    ngAfterContentInit() {
        /*
        if (this.advFiltersComp && !this.mainFiltersComp) {
            return console.warn('When using <nts-filters-advanced> you must include <nts-filters-main> beside it');
        }
        if (this.mainFiltersComp && this.filterInputsList.length) {
            return console.warn('When using <nts-filters-main> you cannot include <nts-filter-input> at root');
        }
        */
        const inputs = [
            ...this.inputsList.toArray(),
            ...this.selectsList.toArray(),
            ...this.checkboxList.toArray(),
            ...this.btnToggleList.toArray(),
            ...this.datepickerList.toArray(),
            ...this.radioList.toArray(),
            ...this.toggleList.toArray(),
            ...this.timepickerList.toArray()
        ];

        this.mainFilters = this.mainFiltersComp ? this.mainFiltersComp.inputs : inputs;
        this.advFilters = this.advFiltersComp ? this.advFiltersComp.inputs : null;

        console.log(this.mainFilters);
        console.log(this.advFilters);

    }
}
