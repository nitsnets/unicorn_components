import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'uni-icon',
    templateUrl: 'icon.component.html',
    styleUrls: ['icon.component.scss']
})
export class UniIconComponent {
    @Input() icon: string;
    @Input() size: string;
}
