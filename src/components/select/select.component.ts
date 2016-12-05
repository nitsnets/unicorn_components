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
  @Input() options: NtsOption[] = [];
  @Input() excludedOptions: string[];
  @Input() multiple = false;

  areOptionsVisible = false;
  optionsSelected: NtsOption[] = [];
  selecting = false;
  search = null;

  constructor() { }

  ngOnInit() { }
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
  isOptionSelected(option: NtsOption) {
    return this.optionsSelected &&
      this.optionsSelected.length &&
      this.optionsSelected.indexOf(option) !== -1;
  }
  onClickOutside() {
    this.hideOptions();
  }
  onFocus($event) {
    this.areOptionsVisible = true;
    this.search = '';
  }
  // Manage non desirable closing
  onBlur($event) { if (!this.selecting) { this.hideOptions(); } }
  onSelectingOption(value) { this.selecting = value; }

  onSelect(option: NtsOption) {
    if (option === null) {
      this.optionsSelected = [];
    } else if (this.multiple) {
      let index = this.optionsSelected.indexOf(option);
      if (index > -1) {
        this.optionsSelected.splice(index, 1);
      } else {
        this.optionsSelected.push(option);
      }
    } else {
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
  onFilter(value) {
    if (value === null) {
      this.onSelect(null);
    }
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
    for (let option of this.options) {
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
  }

}
