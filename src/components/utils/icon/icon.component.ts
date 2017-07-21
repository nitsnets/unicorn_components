import { Component, Input, OnInit, HostBinding } from '@angular/core';

@Component({
    selector: 'uni-icon',
    templateUrl: 'icon.component.html',
    styleUrls: ['icon.component.scss']
})
export class UniIconComponent {

    @HostBinding('class.uni-icon') componentClass = true;
    @Input() icon: string;
    @Input() size: string;
}
