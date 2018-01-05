import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

import { UniBaseComponent } from '../../base/base/base.component';

@Component({
    selector: 'uni-alert',
    templateUrl: 'alert.component.html',
    styleUrls: ['alert.component.scss']
})
export class UniAlertComponent extends UniBaseComponent {

    @HostBinding('class.uni-alert') componentClass = true;
    @Input() icon: string;
    @Input() closable = true;
    @Output() close = new EventEmitter();

    @HostBinding('class.uni-alert--light') get isLight() { return this.color === 'light'; }
    @HostBinding('class.uni-alert--default') get isDefault() { return this.color === 'default'; }
    @HostBinding('class.uni-alert--primary') get isPrimary() { return this.color === 'primary'; }
    @HostBinding('class.uni-alert--success') get isSuccess() { return this.color === 'success'; }
    @HostBinding('class.uni-alert--warning') get isWarning() { return this.color === 'warning'; }
    @HostBinding('class.uni-alert--error') get isError() { return this.color === 'error'; }

    @HostBinding('style.opacity') opacity = 1;
    @HostBinding('style.display') display = 'block';

    onClose() {
        this.close.emit();
        this.opacity = 0;
        setTimeout(() => this.display = 'none', 200);
    }
}
