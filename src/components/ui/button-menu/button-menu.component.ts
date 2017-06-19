import { Component, Input } from '@angular/core';

import { UniButtonBaseComponent } from '../../base/button-base.component';
import { UniPosition } from '../../../models/types';

@Component({
    selector: 'uni-button-menu',
    templateUrl: 'button-menu.component.html',
    styleUrls: ['button-menu.component.scss'],
})
export class UniButtonMenuComponent extends UniButtonBaseComponent {
    @Input() position: UniPosition = 'bottom-left';
}
