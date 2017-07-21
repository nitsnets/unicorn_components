import { Component, EventEmitter, Input, OnChanges, OnInit, Output, HostBinding } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { UniInputComponent } from '../input/input.component';

@Component({
    selector: 'uni-textarea',
    templateUrl: 'textarea.component.html',
})
export class UniTextareaComponent extends UniInputComponent implements OnInit, OnChanges {

    @HostBinding('class.uni-textarea') componentClass = true;
}
