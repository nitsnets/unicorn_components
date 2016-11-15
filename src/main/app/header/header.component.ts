import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-site-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class SiteHeaderComponent implements OnInit {
    constructor(
        private cd: ChangeDetectorRef,
        public route: ActivatedRoute
    ) {

    }

    ngOnInit() {

    }
}
