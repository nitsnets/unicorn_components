import { BrowserModule } from '@angular/platform-browser';
import { ColorPickerModule } from 'angular2-color-picker';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NTS_COMPONENTS } from './components/';
import { NTS_DIRECTIVES } from './directives/';
import { NTS_PIPES } from './pipes/';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ColorPickerModule,
        BrowserModule
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
        ColorPickerModule,
        BrowserModule
    ]
})
export class NtsModule { }

