import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';

import { UniInputBaseComponent } from '../../base/input-base.component';
import { UniRadioComponent } from '../radio/radio.component';

@Component({
    selector: 'uni-radio-group',
    template: '<ng-content></ng-content>',
})
export class UniRadioGroupComponent extends UniInputBaseComponent implements AfterContentInit {

    private _uniModel;
    @Input() set uniModel(value) {
        this._uniModel = value;
        this.initRadiosModels();
    }
    get uniModel() { return this._uniModel; }

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
        this.radios.forEach(item => item.uniModel = this.uniModel);
    }
    private initRadiosListeners() {
        this.radios.forEach(
            item => item.uniModelChange.subscribe(
                value => {
                    this.uniModel = value;
                    this.onNgModelChange(value);
                }
            )
        );
    }
}
