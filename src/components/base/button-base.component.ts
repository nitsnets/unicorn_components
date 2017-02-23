import { Input } from '@angular/core';
import { NtsColor } from '../../models/types';

export abstract class NtsButtonBaseComponent {
    @Input() color: NtsColor;
    @Input() icon: string;
    @Input() iconRight: string;
    @Input() label: string;
    @Input() sublabel: string;
    @Input() size: string;
    @Input() disabled: boolean = false;
}
