import { Component, Input } from '@angular/core';

import { NtsCheckboxComponent } from '../checkbox/checkbox.component';

@Component({
    selector: 'nts-button-toggle',
    templateUrl: 'button-toggle.component.html',
    styleUrls: ['button-toggle.component.scss'],
})
export class NtsButtonToggleComponent extends NtsCheckboxComponent {

}
