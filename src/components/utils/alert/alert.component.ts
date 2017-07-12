import { Component, HostBinding, Input } from '@angular/core';

import { UniBaseComponent } from '../../base/base.component';

@Component({
    selector: 'uni-alert',
    templateUrl: 'alert.component.html',
    styleUrls: ['alert.component.scss']
})
export class UniAlertComponent extends UniBaseComponent {
    @Input() icon: string;
    @Input() closable = true;

    @HostBinding('class.light') get isLight() { return this.color === 'light'; }
    @HostBinding('class.default') get isDefault() { return this.color === 'default'; }
    @HostBinding('class.primary') get isPrimary() { return this.color === 'primary'; }
    @HostBinding('class.success') get isSuccess() { return this.color === 'success'; }
    @HostBinding('class.warning') get isWarning() { return this.color === 'warning'; }
    @HostBinding('class.error') get isError() { return this.color === 'error'; }
}
