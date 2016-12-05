import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'angular2-color-picker';

import { NTS_COMPONENTS } from './components/';
import { NTS_DIRECTIVES } from './directives/';
import { NTS_PIPES } from './pipes/';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerModule,
  ],
  declarations: [
    NTS_COMPONENTS,
    NTS_DIRECTIVES,
    NTS_PIPES
  ],
  exports: [
    NTS_COMPONENTS,
    NTS_DIRECTIVES,
    NTS_PIPES,
    ColorPickerModule
  ]
})
export class NtsModule { }
