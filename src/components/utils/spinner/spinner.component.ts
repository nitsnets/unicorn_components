import { Component, HostBinding, Input, OnChanges } from '@angular/core';

import { UniColor } from '../../../models/types';

@Component({
    selector: 'uni-spinner',
    template: '',
})
export class UniSpinnerComponent implements OnChanges {

    @HostBinding('class.uni-spinner') componentClass = true;
    @Input() color: UniColor;
    @Input() size: 'small' | 'big';
    @Input() type: 'circle' | 'dots' = 'circle';

    @HostBinding('class') className = {};

    ngOnChanges() {

        this.className='';
        if ( this.color ) {
            this.className += 'uni-spinner--' + this.color;
        }

        if ( this.size)  {
            this.className += ' uni-spinner--' + this.size;
        }

        if ( this.type)  {
            this.className += ' uni-spinner--' + this.type;
        }
    }
}
