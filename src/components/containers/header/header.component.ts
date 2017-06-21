import { Component, Input, OnInit } from '@angular/core';

import { UniColor } from '../../../models/types';

@Component({
    selector: 'uni-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss'],
})
export class UniHeaderComponent {

    @Input() visible = true;
    @Input() size: '' | 'medium' = null;
    @Input() color: UniColor = null;

    constructor() { }

}
