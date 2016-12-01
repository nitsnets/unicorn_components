import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { NtsOption } from '../../models/option';

export enum SelectTypes { text, number, email, password }

@Component({
    selector: 'nts-select',
    templateUrl: 'select.component.html',
    styleUrls: ['select.component.scss']
})
export class NtsSelectComponent implements OnInit, OnChanges {
    @Input() ntsModel;
    @Output() ntsModelChange = new EventEmitter();

    @Input() name: string = '';
    @Input() label: string = '';
    @Input() placeholder: string = '';
    @Input() value: string = '';
    @Input() icon: string;
    @Input() ntsOptions: NtsOption[] = [];
    @Input() ntsExcludedOptions: string[];

    options: NtsOption[] = [];
    areOptionsVisible = false;
    optionSelected = null;
    selecting = false;
    search = null;

    constructor() { }

    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes.ntsOptions || changes.ntsExcludeOptions) {
            this.excludeOptions();
        }
        if (changes.ntsOptions || changes.ntsModel) {
            this.updateSelectedOption();
        }
    }
    excludeOptions() {
        if (!this.ntsExcludedOptions || !this.ntsExcludedOptions.length) {
            this.options = this.ntsOptions;
            return;
        }
        this.options = this.ntsOptions.filter(
            (option) => this.ntsExcludedOptions.indexOf(option.value) === -1
        );
    }
    updateSelectedOption() {
        if (!this.ntsOptions) { return; }
        for (let option of this.ntsOptions) {
            if (option.value === this.ntsModel) {
                this.optionSelected = option;
                this.search = option.label;
                return;
            }
        }
    }
    hideOptions() {
        this.areOptionsVisible = false;
        this.search = this.optionSelected ? this.optionSelected.label : null;
    }
    showOptions() {
        this.areOptionsVisible = true;
        this.search = '';
    }
    isOptionSelected(option: NtsOption) {
        return this.optionSelected && option.value === this.optionSelected.value;
    }
    onClickOutside() {
        this.hideOptions();
    }
    onKeyDown(e: KeyboardEvent) {
        switch (e.key) {
            case 'Escape': this.hideOptions(); break;
            case 'Enter':
                if (this.areOptionsVisible) {
                    this.hideOptions();
                    e.preventDefault(); e.stopPropagation();
                }
                break;
            case 'ArrowDown':
                if (!this.areOptionsVisible) {
                    this.showOptions();
                }
                break;
            case 'ArrowUp': break;
        }
    }
    onFocus($event) {
        this.areOptionsVisible = true;
        this.search = '';
    }
    onBlur($event) {
        if (!this.selecting) { this.hideOptions(); }
    }
    onSelectingOption(value) {
        this.selecting = value;
    }
    onSelect(option: NtsOption) {
        this.optionSelected = option;
        this.ntsModel = option ? option.value : null;
        this.ntsModelChange.emit(this.ntsModel);
        this.hideOptions();
    }
    onFilter(value) {
        if (value === null) {
            this.onSelect(null);
        }
    }
}
