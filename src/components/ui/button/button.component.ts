import { Component, Input } from '@angular/core';

import { NtsButtonBaseComponent } from '../../base/button-base.component';

@Component({
    selector: 'nts-button',
    templateUrl: 'button.component.html',
    styleUrls: ['button.component.scss'],
})
export class NtsButtonComponent extends NtsButtonBaseComponent {
    @Input() type: string;
}
