import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';

import { NtsButtonToggleComponent } from './../../../forms/button-toggle/button-toggle.component';
import { NtsCheckboxComponent } from './../../../forms/checkbox/checkbox.component';
import { NtsDatePickerComponent } from './../../../forms/date-picker/date-picker.component';
import { NtsInputBaseComponent } from '../../../base/input-base.component';
import { NtsInputComponent } from '../../../forms/input/input.component';
import { NtsRadioComponent } from '../../../forms/radio/radio.component';
import { NtsSelectComponent } from './../../../forms/select/select.component';
import { NtsTimePickerComponent } from './../../../forms/time-picker/time-picker.component';
import { NtsToggleComponent } from '../../../forms/toggle/toggle.component';

@Component({
    selector: 'nts-filters-advanced',
    template: `<ng-content></ng-content>`
})
export class NtsFiltersAdvancedComponent implements AfterContentInit {

    @ContentChildren(NtsInputComponent, { descendants: true }) inputsList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsSelectComponent, { descendants: true }) selectsList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsCheckboxComponent, { descendants: true }) checkboxList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsButtonToggleComponent, { descendants: true }) btnToggleList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsDatePickerComponent, { descendants: true }) datepickerList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsRadioComponent, { descendants: true }) radioList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsToggleComponent, { descendants: true }) toggleList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsTimePickerComponent, { descendants: true }) timepickerList: QueryList<NtsInputBaseComponent>;

    filters: NtsInputBaseComponent[];

    ngAfterContentInit() {

        this.filters = [
            ...this.inputsList.toArray(),
            ...this.selectsList.toArray(),
            ...this.checkboxList.toArray(),
            ...this.btnToggleList.toArray(),
            ...this.datepickerList.toArray(),
            ...this.radioList.toArray(),
            ...this.toggleList.toArray(),
            ...this.timepickerList.toArray()
        ];
    }

}
