import { Component, Input } from '@angular/core';
import { NtsButtonBaseComponent } from '../../base/button-base.component';

@Component({
    selector: 'nts-button-header',
    templateUrl: 'button-header.component.html',
    styleUrls: ['button-header.component.scss'],
})
export class NtsButtonHeaderComponent extends NtsButtonBaseComponent {
    @Input() type: string;
}
