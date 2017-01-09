import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'nts-icon',
    templateUrl: 'icon.component.html',
    styleUrls: ['icon.component.scss']
})
export class NtsIconComponent implements OnInit {
    @Input() icon: string;
    @Input() size: string;
    constructor() { }
    ngOnInit() { }
}
