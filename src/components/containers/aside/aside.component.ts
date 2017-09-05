import { Component, HostBinding, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'uni-aside',
    templateUrl: 'aside.component.html',
    styleUrls: ['aside.component.scss'],
})
export class UniAsideComponent implements OnChanges {

    @HostBinding('class.uni-aside') componentClass = true;
    @HostBinding('class.uni-aside--left') left = true;
    @HostBinding('class.uni-aside--right') right = false;

    @Input() position: 'left' | 'right' = 'left';

    ngOnChanges(changes) {
        if (this.position === 'left') {
            this.left = true;
            this.right = false;
        } else if (this.position === 'right') {
            this.left = false;
            this.right = true;
        }
    }
    constructor() { }
}
