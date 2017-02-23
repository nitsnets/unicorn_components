import { Component, OnInit } from '@angular/core';

import { NtsFormInputComponent } from '../../base/form-input.component';

@Component({
    selector: 'nts-radio',
    templateUrl: 'radio.component.html',
    styleUrls: ['radio.component.scss'],
})
export class NtsRadioComponent extends NtsFormInputComponent implements OnInit {

    // @Override
    ngOnInit() { }

}
