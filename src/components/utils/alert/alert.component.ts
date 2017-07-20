import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { UniBaseComponent } from '../../base/base.component';

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

    @HostBinding('class.light') get isLight() { return this.color === 'light'; }
    @HostBinding('class.default') get isDefault() { return this.color === 'default'; }
    @HostBinding('class.primary') get isPrimary() { return this.color === 'primary'; }
    @HostBinding('class.success') get isSuccess() { return this.color === 'success'; }
    @HostBinding('class.warning') get isWarning() { return this.color === 'warning'; }
    @HostBinding('class.error') get isError() { return this.color === 'error'; }

    @HostBinding('style.opacity') opacity = 1;
    @HostBinding('style.display') display = 'block';

    onClose() {
        this.close.emit();
        this.opacity = 0;
        setTimeout(() => this.display = 'none', 200);
    }
}
