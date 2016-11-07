import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'go-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss'],
})
export class GoHeaderComponent implements OnInit {

    @Input() goVisible = true;
    @Input() goSize = null;
    @Input() goBg = null;
    @Input() goWithIcon = false;

    constructor() { }

    ngOnInit() {
    }

}
