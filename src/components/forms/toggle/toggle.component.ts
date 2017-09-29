import { Component, Input, HostBinding } from '@angular/core';

import { UniCheckboxComponent } from './../checkbox/checkbox.component';

@Component({
    selector: 'uni-toggle',
    templateUrl: 'toggle.component.html',
    styleUrls: ['toggle.component.scss'],
})
export class UniToggleComponent extends UniCheckboxComponent {

    @HostBinding('class.uni-toggle') componentClass = true;
    @Input() rounded = true;
    @Input() size: string;
}
