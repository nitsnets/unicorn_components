import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

import { UniBaseComponent } from './base.component';

export abstract class UniInputBaseComponent extends UniBaseComponent implements OnInit {

    @Input() model;
    @Output() modelChange = new EventEmitter();
    @Output() uniFocus = new EventEmitter();
    @Output() uniBlur = new EventEmitter();

    @Input() name = '';
    @Input() value = '';
    @Input() required = false;
    @Input() debounce = 0;

    debounceSubs: Subscription;

    ngOnInit() {

        if (!this.model && this.value) {
            this.onNgModelChange(this.value);
        } else {
            this.value = this.model;
        }
    }
    onNgModelChange(ev): Observable<any> {
        if (this.debounceSubs && !this.debounceSubs.closed) {
            this.debounceSubs.unsubscribe();
        }
        const observable = Observable.timer(this.debounce || 0).share();
        this.debounceSubs = observable.subscribe(_ => {
            this.model = ev;
            this.modelChange.emit(ev);
        });
        return observable;

    }
}
