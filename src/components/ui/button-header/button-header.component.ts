import { Component, Input } from '@angular/core';

import { UniButtonBaseComponent } from '../../base/button-base.component';

@Component({
    selector: 'uni-button-header',
    templateUrl: 'button-header.component.html',
    styleUrls: ['button-header.component.scss'],
})
export class UniButtonHeaderComponent extends UniButtonBaseComponent {
    @Input() type: string;
}
