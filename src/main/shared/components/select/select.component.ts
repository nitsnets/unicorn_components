import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { GoOption } from '../../models/option';

export enum SelectTypes { text, number, email, password }

@Component({
    selector: 'go-select',
    templateUrl: 'select.component.html',
    styleUrls: ['select.component.scss']
})
export class GoSelectComponent implements OnInit, OnChanges {
    @Input() goModel;
    @Output() goModelChange = new EventEmitter();

    @Input() name: string = '';
    @Input() label: string = '';
    @Input() placeholder: string = '';
    @Input() value: string = '';
    @Input() icon: string;
    @Input() goOptions: GoOption[] = [];
    @Input() goExcludedOptions: string[];

    options: GoOption[] = [];
    areOptionsVisible = false;
    optionSelected = null;
    selecting = false;
    search = null;

    constructor() { }

    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes.goOptions || changes.goExcludeOptions) {
            this.excludeOptions();
        }
        if (changes.goOptions || changes.goModel) {
            this.updateSelectedOption();
        }
    }
    excludeOptions() {
        if (!this.goExcludedOptions || !this.goExcludedOptions.length) {
            this.options = this.goOptions;
            return;
        }
        this.options = this.goOptions.filter(
            (option) => this.goExcludedOptions.indexOf(option.value) === -1
        );
    }
    updateSelectedOption() {
        if (!this.goOptions) { return; }
        for (let option of this.goOptions) {
            if (option.value === this.goModel) {
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
    isOptionSelected(option: GoOption) {
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
    onSelect(option: GoOption) {
        this.optionSelected = option;
        this.goModel = option.value;
        this.goModelChange.emit(this.goModel);
        this.hideOptions();
    }
    onFilter() {

    }
}
