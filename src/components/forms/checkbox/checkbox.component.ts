import { Component, Input } from '@angular/core';

import { UniInputBaseComponent } from '../../base/input-base.component';

@Component({
    selector: 'uni-checkbox',
    templateUrl: 'checkbox.component.html',
    styleUrls: ['checkbox.component.scss'],
})
export class UniCheckboxComponent extends UniInputBaseComponent {
    @Input() partial = false;

    toggleUniModel() {
        this.onNgModelChange(this.uniModel ? false : true);
    }
}
