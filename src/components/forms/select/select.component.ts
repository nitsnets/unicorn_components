import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { FilterPipe } from '../../../pipes/filter.pipe';
import { NtsInputBaseComponent } from '../../base/input-base.component';
import { NtsOption } from '../../../models/option';

export enum SelectTypes { text, number, email, password }

@Component({
    selector: 'nts-select',
    templateUrl: 'select.component.html',
    styleUrls: ['select.component.scss']
})
export class NtsSelectComponent extends NtsInputBaseComponent implements OnInit, OnChanges {

    _ntsModel;
    @Input() set ntsModel();

    @Input() placeholder = '';
    @Input() icon: string;
    @Input() multiple = false;
    @Input() clear = false;

    @Input() options: NtsOption[] = [];
    @Input() excludedOptions: string[];
    @Input() multipleptions: NtsOption[] = [];

    areOptionsVisible = false;
    optionsFiltered: NtsOption[] = [];
    optionsSelected: NtsOption[] = [];
    pointedIndex = 0;
    selecting = false;
    search = null;

    ngOnInit() {
        if (this.value && !this.ntsModel) {
            this.ntsModel = this.value;
            this.updateOptionsSelectedByModel();
            if (!this.areOptionsVisible) {
                this.updateSearchByOptionsSelected();
            }
        }
    }
    ngOnChanges(changes) {
        if (changes.options || changes.ntsExcludedOptions) {
            this.excludeOptions();
        }
        if (changes.options || changes.ntsModel) {
            this.updateOptionsSelectedByModel();
            if (!this.areOptionsVisible) {
                this.updateSearchByOptionsSelected();
            }
        }
        if (changes.options) {
            this.onFilter();
        }
    }
    onKeyDown(e: KeyboardEvent) {
        switch (e.key) {
            case 'Escape': this.hideOptions(); break;
            case 'Enter': this.selectPointedOption();
                break;
            case 'ArrowDown': this.areOptionsVisible ? this.updatePointedIndex(1) : this.showOptions(); e.preventDefault(); break;
            case 'ArrowUp': this.updatePointedIndex(-1); e.preventDefault(); break;
        }
    }
    isOptionSelected(option: NtsOption): boolean {
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
        this.ntsFocus.emit($event);
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

    onSelect(option: NtsOption) {
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
        if (!this.options || !this.ntsModel) { return; }
        for (const option of this.options) {
            if (!this.multiple && option.value === this.ntsModel ||
                this.multiple && this.ntsModel.includes(option.value)) {
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
        this.ntsModel = newModel;
        this.ntsModelChange.emit(newModel);
        this.ntsBlur.emit();
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
