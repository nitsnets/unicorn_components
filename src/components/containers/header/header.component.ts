import { Component, Input, OnInit, HostBinding } from '@angular/core';

import { UniColor } from '../../../models/types';

@Component({
    selector: 'uni-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss'],
})
export class UniHeaderComponent {

    @HostBinding('class.uni-header') componentClass = true;
    @Input() visible = true;
    @Input() size: '' | 'medium' = null;
    @Input() color: UniColor = null;

    constructor() { }

}
