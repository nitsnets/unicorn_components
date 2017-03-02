import { Component, Input } from '@angular/core';

import { NtsButtonBaseComponent } from '../../base/button-base.component';
import { NtsPosition } from '../../../models/types';

@Component({
    selector: 'nts-button-menu',
    templateUrl: 'button-menu.component.html',
    styleUrls: ['button-menu.component.scss'],
})
export class NtsButtonMenuComponent extends NtsButtonBaseComponent {
    @Input() position: NtsPosition = 'bottom-left';
}
