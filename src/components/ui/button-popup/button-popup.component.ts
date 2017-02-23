import { Component, Input } from '@angular/core';

import { NtsButtonBaseComponent } from '../../base/button-base.component';
import { NtsPosition } from '../../../models/types';

@Component({
    selector: 'nts-button-popup',
    templateUrl: 'button-popup.component.html',
    styleUrls: ['button-popup.component.scss'],
})
export class NtsButtonPopupComponent extends NtsButtonBaseComponent {
    @Input() position: NtsPosition = 'bottom-left';

}
