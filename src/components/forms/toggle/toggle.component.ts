import { Component, Input } from '@angular/core';

import { NtsCheckboxComponent } from './../checkbox/checkbox.component';

@Component({
    selector: 'nts-toggle',
    templateUrl: 'toggle.component.html',
    styleUrls: ['toggle.component.scss'],
})
export class NtsToggleComponent extends NtsCheckboxComponent {
    @Input() rounded = true;
}
