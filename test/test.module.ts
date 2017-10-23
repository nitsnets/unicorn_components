import { ModuleWithProviders, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test.component';
import { UnicornComponentsModule } from './../src/unicorn.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        UnicornComponentsModule.forRoot()
    ],
    declarations: [TestComponent],
    bootstrap: [TestComponent]
})
export class UnicornComponentsTestModule { }

