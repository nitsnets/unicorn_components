import { Component, OnInit, HostBinding } from '@angular/core';

import { UniInputBaseComponent } from '../../base/input-base.component';

@Component({
    selector: 'uni-radio',
    templateUrl: 'radio.component.html',
    styleUrls: ['radio.component.scss'],
})
export class UniRadioComponent extends UniInputBaseComponent implements OnInit {

    @HostBinding('class.uni-radio') componentClass = true;
    // @Override
    ngOnInit() { }

}
