import { Component, HostBinding, Input, OnInit } from '@angular/core';

import { UniColor } from '../../../models/types';

@Component({
    selector: 'uni-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss'],
})
export class UniHeaderComponent {

    @HostBinding('class.uni-header') componentClass = true;
    @HostBinding('class.uni-header--medium') get isMedium() { return this.size === 'medium' };
    @HostBinding('class.uni-header--grey') get isGrey() { return this.color === 'medium' };
    @HostBinding('class.uni-header--error') get isError() { return this.color === 'error' };

    @Input() visible = true;
    @Input() size: '' | 'medium' = null;
    @Input() color: UniColor = null;

    constructor() { }
}
