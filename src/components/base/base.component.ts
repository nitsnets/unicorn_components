import { Input } from '@angular/core';
import { NtsColor } from '../../models/types';

export abstract class NtsBaseComponent {
    @Input() color: NtsColor;
    @Input() label: string;
    @Input() disabled = false;
}
