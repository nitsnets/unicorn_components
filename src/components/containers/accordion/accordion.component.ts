import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'uni-accordion',
    templateUrl: 'accordion.component.html',
    styleUrls: ['accordion.component.scss'],
})
export class UniAccordionComponent {
    @Input() name = '';
    @Input() options = false;

    @Input() collapsed = true;
    @Output() collapsedChange = new EventEmitter();

    constructor() { }
}
