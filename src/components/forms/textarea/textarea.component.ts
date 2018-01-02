import { Component, EventEmitter, HostBinding, Input, OnChanges, OnInit, Output } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { UniInputComponent } from '../input/input.component';

@Component({
    selector: 'uni-textarea',
    templateUrl: 'textarea.component.html',
})
export class UniTextareaComponent extends UniInputComponent implements OnInit {

    @HostBinding('class.uni-textarea') componentClass = true;
}
