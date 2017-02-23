import { Component, Input } from '@angular/core';

import { NtsButtonBaseComponent } from '../../base/button-base.component';
import { NtsPosition } from '../../../models/types';

@Component({
    selector: 'nts-button-dropdown',
    templateUrl: 'button-dropdown.component.html',
    styleUrls: ['button-dropdown.component.scss'],
})
export class NtsButtonDropdownComponent extends NtsButtonBaseComponent {
    @Input() position: NtsPosition = 'bottom-left';
}
