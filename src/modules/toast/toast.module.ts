import { NgModule } from '@angular/core';

import {  NtsModule } from '../../nts.module';

import { ToastService } from './toast.service';
import { NtsToastComponent } from './toast.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
         NtsModule,
         BrowserModule
    ],
    declarations: [
        NtsToastComponent,
    ],
    providers: [
        ToastService
    ],
    exports: [
        NtsToastComponent,
    ]
})
export class ToastModule { }
