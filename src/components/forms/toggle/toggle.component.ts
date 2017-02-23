import { Component, Input } from '@angular/core';

import { NtsFormInputComponent } from '../../base/form-input.component';

@Component({
    selector: 'nts-toggle',
    templateUrl: 'toggle.component.html',
    styleUrls: ['toggle.component.scss'],
})
export class NtsToggleComponent extends NtsFormInputComponent {
    @Input() rounded = true;
}
