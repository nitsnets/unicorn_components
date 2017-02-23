import { Component, Input } from '@angular/core';

import { NtsFormInputComponent } from '../../base/form-input.component';

@Component({
    selector: 'nts-checkbox',
    templateUrl: 'checkbox.component.html',
    styleUrls: ['checkbox.component.scss'],
})
export class NtsCheckboxComponent extends NtsFormInputComponent {
    @Input() partial: boolean = false;
}
