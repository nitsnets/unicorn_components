import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';

import { NtsButtonToggleComponent } from '../../../forms/button-toggle/button-toggle.component';
import { NtsCheckboxComponent } from './../../../forms/checkbox/checkbox.component';
import { NtsDatePickerComponent } from '../../../forms/date-picker/date-picker.component';
import { NtsInputBaseComponent } from '../../../base/input-base.component';
import { NtsInputComponent } from '../../../forms/input/input.component';
import { NtsRadioComponent } from './../../../forms/radio/radio.component';
import { NtsSelectComponent } from './../../../forms/select/select.component';
import { NtsTimePickerComponent } from '../../../forms/time-picker/time-picker.component';
import { NtsToggleComponent } from '../../../forms/toggle/toggle.component';

@Component({
    selector: 'nts-filters-main',
    template: `<ng-content></ng-content>`
})
export class NtsFiltersMainComponent implements AfterContentInit {

    @ContentChildren(NtsInputComponent) inputsList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsSelectComponent) selectsList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsCheckboxComponent) checkboxList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsButtonToggleComponent) btnToggleList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsDatePickerComponent) datepickerList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsRadioComponent) radioList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsToggleComponent) toggleList: QueryList<NtsInputBaseComponent>;
    @ContentChildren(NtsTimePickerComponent) timepickerList: QueryList<NtsInputBaseComponent>;

    inputs;

    ngAfterContentInit() {

        this.inputs = [
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
