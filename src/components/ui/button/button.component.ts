import { Component, Input, HostBinding } from '@angular/core';

import { UniButtonBaseComponent } from '../../base/button-base.component';

@Component({
    selector: 'uni-button',
    templateUrl: 'button.component.html',
    styleUrls: ['button.component.scss']
})
export class UniButtonComponent extends UniButtonBaseComponent {

    @HostBinding('class.uni-button') componentClass = true;
    @HostBinding('class.uni-button--default') get isDefault() { return this.color === 'default' }
    @HostBinding('class.uni-button--primary') get isPrimary() { return this.color === 'primary' }
    @HostBinding('class.uni-button--success') get isSuccess() { return this.color === 'success' }
    @HostBinding('class.uni-button--error') get isError() { return this.color === 'error' }
    @HostBinding('class.uni-button--warning') get isWarning() { return this.color === 'warning' }
    @Input() type: string;
}
