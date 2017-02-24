import { Component, Input } from '@angular/core';

import { NtsInputBaseComponent } from '../../base/input-base.component';

@Component({
    selector: 'nts-toggle',
    templateUrl: 'toggle.component.html',
    styleUrls: ['toggle.component.scss'],
})
export class NtsToggleComponent extends NtsInputBaseComponent {
    @Input() rounded = true;
}
