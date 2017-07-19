import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'uni-row-spacer',
    template: '',
    styles: [':host{ margin-left: auto; margin-right: auto;}'],
})
export class UniRowSpacerComponent {

    @HostBinding('class.uni-row-spacer') componentClass = true;
    constructor() { }
}
