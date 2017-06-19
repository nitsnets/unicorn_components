import { Component, Input } from '@angular/core';

import { UniButtonBaseComponent } from '../../base/button-base.component';

@Component({
    selector: 'uni-button',
    templateUrl: 'button.component.html',
    styleUrls: ['button.component.scss'],
})
export class UniButtonComponent extends UniButtonBaseComponent {
    @Input() type: string;
}
