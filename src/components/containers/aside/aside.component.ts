import { Component, HostBinding, OnChanges } from '@angular/core';

@Component({
    selector: 'uni-aside',
    templateUrl: 'aside.component.html',
    styleUrls: ['aside.component.scss'],
})
export class UniAsideComponent implements OnChanges {
    constructor() { }

    @HostBinding('class.aside-left') left = true;
    @HostBinding('class.aside-right') right = true;

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
}
