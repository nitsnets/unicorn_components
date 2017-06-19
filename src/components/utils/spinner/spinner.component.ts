import { Component, HostBinding, Input, OnChanges } from '@angular/core';

import { NtsColor } from '../../../models/types';

@Component({
    selector: 'nts-spinner',
    template: '',
})
export class NtsSpinnerComponent implements OnChanges {
    @Input() color: NtsColor;
    @Input() size: 'small' | 'big';
    @Input() type: 'circle' | 'dots' = 'circle';

    @HostBinding('class') className = {};

    ngOnChanges() {
        this.className = (this.color || '') + ' ' + (this.size || '') + ' ' + (this.type || '');
    }
}
