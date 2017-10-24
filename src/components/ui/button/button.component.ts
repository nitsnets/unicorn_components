import { Component, HostBinding, Input } from '@angular/core';

import { UniButtonBaseComponent } from '../../base/button-base/button-base.component';

@Component({
    selector: 'uni-button',
    templateUrl: 'button.component.html',
    styleUrls: ['button.component.scss']
})
export class UniButtonComponent extends UniButtonBaseComponent {

    @HostBinding('class.uni-button') componentClass = true;
    @Input() type: string;
}
