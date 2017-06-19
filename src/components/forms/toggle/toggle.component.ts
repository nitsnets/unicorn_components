import { Component, Input } from '@angular/core';

import { UniCheckboxComponent } from './../checkbox/checkbox.component';

@Component({
    selector: 'uni-toggle',
    templateUrl: 'toggle.component.html',
    styleUrls: ['toggle.component.scss'],
})
export class UniToggleComponent extends UniCheckboxComponent {
    @Input() rounded = true;
}
