import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';

import { UniInputBaseComponent } from '../../base/input-base.component';
import { UniRadioComponent } from '../radio/radio.component';

@Component({
    selector: 'uni-radio-group',
    template: '<ng-content></ng-content>',
})
export class UniRadioGroupComponent extends UniInputBaseComponent implements AfterContentInit {

    private _model;
    @Input() set model(value) {
        this._model = value;
        this.initRadiosModels();
    }
    get model() { return this._model; }

    @ContentChildren(UniRadioComponent) radios: QueryList<UniRadioComponent>;

    ngAfterContentInit() {
        this.initRadios();
        this.radios.changes.subscribe(() => this.initRadios());
    }
    private initRadios() {
        this.initRadiosListeners();
        this.initRadiosModels();
    }
    private initRadiosModels() {
        if (!this.radios) { return; }
        this.radios.forEach(item => item.model = this.model);
    }
    private initRadiosListeners() {
        this.radios.forEach(
            item => item.modelChange.subscribe(
                value => {
                    this.model = value;
                    this.onNgModelChange(value);
                }
            )
        );
    }
}
