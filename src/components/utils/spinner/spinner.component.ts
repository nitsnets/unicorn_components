import { Component, HostBinding, Input, OnChanges } from '@angular/core';

import { UniColor } from '../../../models/types';

@Component({
    selector: 'uni-spinner',
    template: '',
})
export class UniSpinnerComponent {

    @HostBinding('class.uni-spinner') componentClass = true;
    @HostBinding('class.uni-spinner--dots') get isDots() { return this.type === 'dots'; }
    @HostBinding('class.uni-spinner--circle') get isCircle() { return this.type === 'circle'; }
    @HostBinding('class.uni-spinner--small') get isSmall() { return this.size === 'small'; }
    @HostBinding('class.uni-spinner--big') get isBig() { return this.size === 'big'; }
    @HostBinding('class.uni-spinner--primary') get isPrimary() { return this.color === 'primary'; }
    @HostBinding('class.uni-spinner--error') get isError() { return this.color === 'error'; }
    @HostBinding('class.uni-spinner--success') get isSuccess() { return this.color === 'success'; }

    @Input() color: UniColor;
    @Input() size: 'small' | 'big';
    @Input() type: 'circle' | 'dots' = 'circle';
}
