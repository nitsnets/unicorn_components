import { ModuleWithProviders, NgModule } from '@angular/core';
import { UNI_COMPONENTS, UNI_ENTRY_COMPONENTS, UNI_SERVICES } from './components/';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { UNI_DIRECTIVES } from './directives/';
import { UNI_PIPES } from './pipes/';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TextMaskModule,
        BrowserModule,
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
    ],
    entryComponents: [
        UNI_ENTRY_COMPONENTS
    ]
})
export class UnicornComponentsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: UnicornComponentsModule,
            providers: [
                UNI_SERVICES
            ]
        }
    }
}

