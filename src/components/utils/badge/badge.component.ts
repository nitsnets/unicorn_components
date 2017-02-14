import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'nts-badge',
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.scss']
})
export class NtsBadgeComponent implements OnInit {
    @Input() value: number;

    constructor() { }

    ngOnInit() {

    }
}
