import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'uni-separator',
    template: '<hr>',
    styleUrls: ['separator.component.scss'],
})
export class UniSeparatorComponent {

    @HostBinding('class.uni-separator') componentClass = true;
}
