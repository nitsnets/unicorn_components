import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SortablejsModule } from 'angular-sortablejs';
import { TextMaskModule } from 'angular2-text-mask';
import { UNI_COMPONENTS } from './components/';
import { UNI_DIRECTIVES } from './directives/';
import { UNI_PIPES } from './pipes/';
import { UniDatagridDeleteComponent } from './components/ui/datagrid/delete/delete.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TextMaskModule,
        SortablejsModule,
        BrowserModule
    ],
    declarations: [
        UNI_COMPONENTS,
        UNI_DIRECTIVES,
        UNI_PIPES
    ],
    exports: [
        UNI_COMPONENTS,
        UNI_DIRECTIVES,
        UNI_PIPES,
        BrowserModule
    ],
    entryComponents: [
        UniDatagridDeleteComponent
    ]
})
export class UnicornModule { }

