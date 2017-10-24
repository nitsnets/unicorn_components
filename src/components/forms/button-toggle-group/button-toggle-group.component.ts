import { Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';

import { UniButtonToggleComponent } from '../button-toggle/button-toggle.component';
import { UniInputBaseComponent } from '../../base/input-base/input-base.component';

@Component({
    selector: 'uni-button-toggle-group',
    templateUrl: 'button-toggle-group.component.html',
})
export class UniButtonToggleGroupComponent extends UniInputBaseComponent {
    private _model;

    @HostBinding('class.uni-button-toggle-group') componentClass = true;
    @Input() set model(value) {
        this._model = value;
        this.initButtonsModels();
    }
    get model() { return this._model; }

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
        this.buttons.forEach(item => item.model = item.value === this.model ? true : false);
    }
    private initButtonsListeners() {
        this.buttons.forEach(
            item => item.modelChange.filter(
                value => !!value,
            ).subscribe(
                value => {
                    this.model = item.value;
                    this.onNgModelChange(item.value);
                },
            )
        );
    }
}
