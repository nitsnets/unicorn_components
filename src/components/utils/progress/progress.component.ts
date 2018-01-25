import { Component, Input, HostBinding } from '@angular/core';

import { UniColor } from '../../../models/types';

@Component({
    selector: 'uni-progress',
    templateUrl: 'progress.component.html',
    styleUrls: ['progress.component.scss'],
})
export class UniProgressComponent {

    @HostBinding('class.uni-progress') componentClass = true;
    @Input() value = 0;
    @Input() total = 100;
    @Input() showPercentage = false;
    @Input() showCount = false;
    @Input() color: UniColor;

}
