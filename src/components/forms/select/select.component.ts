import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { FilterPipe } from '../../../pipes/filter.pipe';
import { UniInputBaseComponent } from '../../base/input-base.component';
import { UniOption } from '../../../models/option';

export enum SelectTypes { text, number, email, password }

@Component({
    selector: 'uni-select',
    templateUrl: 'select.component.html',
    styleUrls: ['select.component.scss']
})
export class UniSelectComponent extends UniInputBaseComponent implements OnInit, OnChanges {

    private _uniModel;
    @Input() set uniModel(value) {
        this._uniModel = value;
        this.updateOptionsSelectedByModel();
        if (!this.areOptionsVisible) {
            this.updateSearchByOptionsSelected();
        }
    };
    get uniModel() { return this._uniModel; }

    @Input() placeholder = '';
    @Input() icon: string;
    @Input() multiple = false;
    @Input() clear = false;
    @Input() filterable = true;

    @Input() options: UniOption[] = [];
    @Input() excludedOptions: string[];

    areOptionsVisible = false;
    optionsFiltered: UniOption[] = [];
    optionsSelected: UniOption[] = [];
    pointedIndex = 0;
    selecting = false;
    search = null;

    ngOnChanges(changes) {
        if (changes.options || changes.uniExcludedOptions) {
            this.excludeOptions();
        }
        if (changes.options) {
            this.updateOptionsSelectedByModel();
            if (!this.areOptionsVisible) {
                this.updateSearchByOptionsSelected();
            }
            this.onFilter();
        }
    }
    onKeyDown(e: KeyboardEvent) {
        switch (e.key) {
            case 'Escape': this.hideOptions(); break;
            case 'Enter': this.selectPointedOption(); break;
            case 'ArrowDown':
                this.areOptionsVisible ?
                    this.updatePointedIndex(1) :
                    this.showOptions();
                e.preventDefault();
                break;
            case 'ArrowUp':
                this.updatePointedIndex(-1);
                e.preventDefault();
                break;
        }
    }
    isOptionSelected(option: UniOption): boolean {
        return this.optionsSelected &&
            this.optionsSelected.length &&
            this.optionsSelected.indexOf(option) !== -1;
    }
    isOptionPointed(i: number): boolean {
        return this.pointedIndex === i;
    }
    onClickOutside() {
        this.hideOptions();
    }
    onFocus($event) {
        this.showOptions();
        this.uniFocus.emit($event);
    }
    // Manage non desirable closing
    onBlur($event) {
        if (!this.selecting) { this.hideOptions(); }
    }
    onSelectingOption(value) {
        this.selecting = value;
    }

    onHoverOption(index: number) {
        this.pointedIndex = index;
    }

    onSelect(option: UniOption) {
        if (option === null) {
            this.optionsSelected = [];
        } else if (this.multiple) {
            const index = this.optionsSelected.indexOf(option);
            if (index > -1) {
                this.optionsSelected.splice(index, 1);
            } else {
                this.optionsSelected.push(option);
            }
        } else if (option) {
            this.optionsSelected = [option];
            this.hideOptions();
        }

        this.updateModelByOptionsSelected();
    }
    onSelectAll() {
        this.optionsSelected = [];
        Object.assign(this.optionsSelected, this.options);
        this.updateModelByOptionsSelected();
    }
    onFilter(value = this.search) {
        this.optionsFiltered = new FilterPipe().transform(this.options, 'label', value);
        this.updatePointedIndex();
        if (value === null) {
            this.onSelect(null);
            return;
        }
    }

    /* PRIVATE METHODS */
    private updatePointedIndex(inc = 0) {
        const newIndex = this.pointedIndex + inc;
        if (newIndex < 0) {
            this.pointedIndex = 0;
        } else if (newIndex >= this.optionsFiltered.length) {
            this.pointedIndex = this.optionsFiltered.length - 1;
        } else { this.pointedIndex = newIndex; }
    }
    private excludeOptions() {
        if (this.excludedOptions && this.excludedOptions.length) {
            this.options = this.options.filter(
                (option) => this.excludedOptions.indexOf(option.value) === -1
            );
        }
    }
    private updateOptionsSelectedByModel() {
        this.optionsSelected = [];
        if (!this.options || !this.uniModel) { this.optionsSelected = []; return; }
        for (const option of this.options) {
            if (!this.multiple && option.value === this.uniModel ||
                this.multiple && this.uniModel.includes(option.value)) {
                this.optionsSelected.push(option);
            }
        }
    }
    private updateModelByOptionsSelected() {
        let newModel = null;
        if (!this.optionsSelected || !this.optionsSelected.length) {
            if (this.multiple) {
                newModel = [];
            }
        } else {
            if (this.multiple) {
                newModel = this.optionsSelected.map(o => o.value);
            } else {
                newModel = this.optionsSelected[0].value;
            }
        }
        this.uniModel = newModel;
        this.uniModelChange.emit(this.uniModel);
        this.uniBlur.emit();
    }
    private updateSearchByOptionsSelected() {
        if (!this.optionsSelected || !this.optionsSelected.length) {
            this.search = '';
        } else {
            if (this.multiple) {
                this.search = this.optionsSelected.map(o => o.label).join();
            } else {
                this.search = this.optionsSelected[0].label;
            }
        }
    }
    private hideOptions() {
        this.areOptionsVisible = false;
        this.updateSearchByOptionsSelected();
    }
    private showOptions() {
        this.areOptionsVisible = true;
        this.search = '';
        this.onFilter();
    }
    private selectPointedOption() {
        const pointedOption = this.optionsFiltered[this.pointedIndex];
        this.onSelect(pointedOption);
    }


}
