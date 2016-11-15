import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BASIC_GO_COMPONENTS } from './components/';
import { BASIC_GO_DIRECTIVES } from './directives/';
import { BASIC_GO_PIPES } from './pipes/';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        BASIC_GO_COMPONENTS,
        BASIC_GO_DIRECTIVES,
        BASIC_GO_PIPES
    ],
    exports: [
        BASIC_GO_COMPONENTS,
        BASIC_GO_DIRECTIVES,
        BASIC_GO_PIPES,
        CommonModule,
        RouterModule,
        FormsModule
    ]
})
export class SharedModule { }
