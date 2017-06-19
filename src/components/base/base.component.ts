import { Input } from '@angular/core';
import { UniColor } from '../../models/types';

export abstract class UniBaseComponent {
    @Input() color: UniColor;
    @Input() label: string;
    @Input() disabled = false;
}
