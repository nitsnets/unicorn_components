import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'go-accordion',
    templateUrl: 'accordion.component.html',
    styleUrls: ['accordion.component.scss'],
})
export class GoAccordionComponent {
    @Input() name = '';
    @Input() options = false;

    @Input() collapsed = true;
    @Output() collapsedChange = new EventEmitter();

    constructor() { }
}
