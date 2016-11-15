import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'go-icon',
    templateUrl: 'icon.component.html',
    styleUrls: ['icon.component.scss']
})
export class GoIconComponent implements OnInit {
    @Input() icon: string;
    @Input() size: string = 'medium';
    constructor() { }
    ngOnInit() { }
}
