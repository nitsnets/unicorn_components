import { Component, HostBinding, Input, OnChanges } from '@angular/core';

import { UniColor } from '../../../models/types';

@Component({
    selector: 'uni-spinner',
    template: '',
})
export class UniSpinnerComponent implements OnChanges {
    @Input() color: UniColor;
    @Input() size: 'small' | 'big';
    @Input() type: 'circle' | 'dots' = 'circle';

    @HostBinding('class') className = {};

    ngOnChanges() {
        this.className = (this.color || '') + ' ' + (this.size || '') + ' ' + (this.type || '');
    }
}
