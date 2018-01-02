import { ModuleWithProviders, NgModule } from '@angular/core';
import { UNI_COMPONENTS, UNI_ENTRY_COMPONENTS, UNI_SERVICES } from './components/';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UNI_DIRECTIVES } from './directives/';
import { UNI_PIPES } from './pipes/';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
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

