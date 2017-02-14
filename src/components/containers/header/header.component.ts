import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'nts-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss'],
})
export class NtsHeaderComponent implements OnInit {

    @Input() ntsVisible = true;
    @Input() ntsSize = null;
    @Input() ntsBg = null;
    @Input() ntsWithIcon = false;

    constructor() { }

    ngOnInit() {
    }

}
