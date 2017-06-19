import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'uni-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss'],
})
export class UniHeaderComponent implements OnInit {

    @Input() ntsVisible = true;
    @Input() ntsSize = null;
    @Input() ntsBg = null;
    @Input() ntsWithIcon = false;

    constructor() { }

    ngOnInit() {
    }

}
