import { Component, Input } from '@angular/core';

import { NtsColor } from '../../../models/types';

@Component({
    selector: 'nts-progress',
    templateUrl: 'progress.component.html',
    styleUrls: ['progress.component.scss'],
})
export class NtsProgressComponent {

    @Input() value = 0;
    @Input() total = 100;
    @Input() showPercentage = false;
    @Input() showCount = false;
    @Input() color: NtsColor;

    constructor() { }
}
