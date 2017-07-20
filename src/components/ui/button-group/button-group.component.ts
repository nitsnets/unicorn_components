import { Component, HostBinding } from '@angular/core';
@Component({
    selector: 'uni-button-group',
    templateUrl: 'button-group.component.html',
    styleUrls: ['button-group.component.scss']
})
export class UniButtonGroupComponent {

    @HostBinding('class.uni-button-group') componentClass = true;
}
