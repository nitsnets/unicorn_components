import { Component, Input, ViewEncapsulation } from '@angular/core';

import { UniButtonBaseComponent } from '../../base/button-base.component';

@Component({
    selector: 'uni-button',
    templateUrl: 'button.component.html',
    styleUrls: ['button.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class UniButtonComponent extends UniButtonBaseComponent {
    @Input() type: string;
}
