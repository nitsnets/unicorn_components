import { Component, HostBinding } from '@angular/core';
import { UniCheckboxComponent } from '../checkbox/checkbox.component';

@Component({
    selector: 'uni-button-toggle',
    templateUrl: 'button-toggle.component.html',
    styleUrls: ['button-toggle.component.scss'],
})
export class UniButtonToggleComponent extends UniCheckboxComponent {

    @HostBinding('class.uni-button-toggle') componentClass = true;
}
