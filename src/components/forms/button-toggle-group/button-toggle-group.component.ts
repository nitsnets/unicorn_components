import { Component, ContentChildren, Input, QueryList } from '@angular/core';

import { UniButtonToggleComponent } from '../button-toggle/button-toggle.component';
import { UniInputBaseComponent } from '../../base/input-base.component';

@Component({
    selector: 'uni-button-toggle-group',
    templateUrl: 'button-toggle-group.component.html',
})
export class UniButtonToggleGroupComponent extends UniInputBaseComponent {
    private _uniModel;
    @Input() set uniModel(value) {
        this._uniModel = value;
        this.initButtonsModels();
    }
    get uniModel() { return this._uniModel; }

    @ContentChildren(UniButtonToggleComponent) buttons: QueryList<UniButtonToggleComponent>;

    ngAfterContentInit() {
        this.initButtons();
        this.buttons.changes.subscribe(() => this.initButtons());
    }
    private initButtons() {
        this.initButtonsListeners();
        this.initButtonsModels();
    }
    private initButtonsModels() {
        if (!this.buttons) { return; }
        this.buttons.forEach(item => item.uniModel = item.value === this.uniModel ? true : false);
    }
    private initButtonsListeners() {
        this.buttons.forEach(
            item => item.uniModelChange.filter(
                value => !!value,
            ).subscribe(
                value => {
                    this.uniModel = item.value;
                    this.onNgModelChange(item.value);
                },
            )
        );
    }
}
