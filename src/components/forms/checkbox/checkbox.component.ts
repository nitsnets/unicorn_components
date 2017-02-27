import { Component, Input } from '@angular/core';

import { NtsInputBaseComponent } from '../../base/input-base.component';

@Component({
    selector: 'nts-checkbox',
    templateUrl: 'checkbox.component.html',
    styleUrls: ['checkbox.component.scss'],
})
export class NtsCheckboxComponent extends NtsInputBaseComponent {
    @Input() partial: boolean = false;

    toggleNtsModel() {
        this.onNgModelChange(this.ntsModel ? false : true);
    }
}
