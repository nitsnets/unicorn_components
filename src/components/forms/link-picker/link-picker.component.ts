import {
    Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output, ElementRef,
    ContentChild
} from '@angular/core';

import { UniInputBaseComponent } from '../../base/input-base/input-base.component';
import { UniOption } from '../../../models/option';

@Component({
    selector: 'uni-link-picker',
    templateUrl: 'link-picker.component.html',
})
export class UniLinkPickerComponent extends UniInputBaseComponent {
    @HostBinding('class.uni-link-picker') componentClass = true;

    @Input() placeholder = '';
    @Input() options: UniOption[];
    @Input() icon: string;

    search = '';
    blank = false;
    external = false;

    onSearch(search: string) {
        this.search = search;
        if (search.startsWith('http://') || search.startsWith('https://')) {
            this.external = true;
        } else {
            this.external = false;
        }
    }

    openLink() {
        window.open(this.model, '_blank');
    }
}
