import { Component, HostBinding, Input } from '@angular/core';

import { UniButtonBaseComponent } from '../../base/button-base/button-base.component';
import { UniButtonComponent } from './../button/button.component';

@Component({
    selector: 'uni-button-header',
    templateUrl: 'button-header.component.html',
    styleUrls: ['button-header.component.scss'],
})
export class UniButtonHeaderComponent extends UniButtonComponent {

    @HostBinding('class.uni-button-header') componentClass = true;
}
