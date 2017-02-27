import { Input } from '@angular/core';
import { NtsBaseComponent } from './base.component';

export abstract class NtsButtonBaseComponent extends NtsBaseComponent {
    @Input() icon: string;
    @Input() iconRight: string;
    @Input() sublabel: string;
    @Input() size: string;
}
