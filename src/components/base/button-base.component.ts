import { Input } from '@angular/core';
import { UniBaseComponent } from './base.component';

export abstract class UniButtonBaseComponent extends UniBaseComponent {
    @Input() icon: string;
    @Input() iconRight: string;
    @Input() sublabel: string;
    @Input() size: string;
}
