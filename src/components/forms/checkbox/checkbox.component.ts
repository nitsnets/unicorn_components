import { Component, HostBinding, Input } from '@angular/core';

import { UniInputBaseComponent } from '../../base/input-base.component';

@Component({
    selector: 'uni-checkbox',
    templateUrl: 'checkbox.component.html',
    styleUrls: ['checkbox.component.scss'],
})
export class UniCheckboxComponent extends UniInputBaseComponent {

    @HostBinding('class.uni-checkbox') componentClass = true;
    @Input() partial = false;

    toggleUniModel() {
        this.onNgModelChange(this.model ? false : true);
    }
}
