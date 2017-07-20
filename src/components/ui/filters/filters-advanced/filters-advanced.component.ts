import { AfterContentInit, Component, ContentChildren, QueryList, HostBinding } from '@angular/core';

import { UniButtonToggleComponent } from './../../../forms/button-toggle/button-toggle.component';
import { UniCheckboxComponent } from './../../../forms/checkbox/checkbox.component';
import { UniDatePickerComponent } from './../../../forms/date-picker/date-picker.component';
import { UniInputBaseComponent } from '../../../base/input-base.component';
import { UniInputComponent } from '../../../forms/input/input.component';
import { UniRadioComponent } from '../../../forms/radio/radio.component';
import { UniSelectComponent } from './../../../forms/select/select.component';
import { UniTimePickerComponent } from './../../../forms/time-picker/time-picker.component';
import { UniToggleComponent } from '../../../forms/toggle/toggle.component';

@Component({
    selector: 'uni-filters-advanced',
    template: `<ng-content></ng-content>`
})
export class UniFiltersAdvancedComponent implements AfterContentInit {

    @HostBinding('class.uni-filters-advanced') componentClass = true;

    @ContentChildren(UniInputComponent, { descendants: true }) inputsList: QueryList<UniInputBaseComponent>;
    @ContentChildren(UniSelectComponent, { descendants: true }) selectsList: QueryList<UniInputBaseComponent>;
    @ContentChildren(UniCheckboxComponent, { descendants: true }) checkboxList: QueryList<UniInputBaseComponent>;
    @ContentChildren(UniButtonToggleComponent, { descendants: true }) btnToggleList: QueryList<UniInputBaseComponent>;
    @ContentChildren(UniDatePickerComponent, { descendants: true }) datepickerList: QueryList<UniInputBaseComponent>;
    @ContentChildren(UniRadioComponent, { descendants: true }) radioList: QueryList<UniInputBaseComponent>;
    @ContentChildren(UniToggleComponent, { descendants: true }) toggleList: QueryList<UniInputBaseComponent>;
    @ContentChildren(UniTimePickerComponent, { descendants: true }) timepickerList: QueryList<UniInputBaseComponent>;

    filters: UniInputBaseComponent[];

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
