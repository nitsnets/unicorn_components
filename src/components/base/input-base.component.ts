import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

import { UniBaseComponent } from './base.component';

export abstract class UniInputBaseComponent extends UniBaseComponent implements OnInit {

    @Input() ntsModel;
    @Output() ntsModelChange = new EventEmitter();
    @Output() ntsFocus = new EventEmitter();
    @Output() ntsBlur = new EventEmitter();

    @Input() name = '';
    @Input() value = '';
    @Input() required = false;
    @Input() debounce = 0;

    debounceSubs: Subscription;

    ngOnInit() {

        if (!this.ntsModel && this.value) {
            this.onNgModelChange(this.value);
        } else {
            this.value = this.ntsModel;
        }
    }
    onNgModelChange(ev): Observable<any> {
        if (this.debounceSubs && !this.debounceSubs.closed) {
            this.debounceSubs.unsubscribe();
        }
        const observable = Observable.timer(this.debounce || 0).share();
        this.debounceSubs = observable.subscribe(_ => {
            this.ntsModel = ev;
            this.ntsModelChange.emit(ev);
        });
        return observable;

    }
}
