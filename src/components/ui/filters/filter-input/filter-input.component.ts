import { Component, Input } from '@angular/core';

import { NtsInputBaseComponent } from '../../../base/input-base.component';

@Component({
    selector: 'nts-filter-input',
    templateUrl: './filter-input.component.html',
    styleUrls: ['./filter-input.component.scss']
})
export class NtsFilterInputComponent extends NtsInputBaseComponent {
    @Input() field;
    @Input() type;
    @Input() width;


}
