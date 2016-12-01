import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {  NtsModule } from '../src/nts.module';

import { DemoComponent } from './demo.component';

import { NtsModalComponent } from '../src/modules/modal/modal.component';
import { ModalModule } from '../src/modules/modal/modal.module';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
     NtsModule,
    BrowserModule,
    HttpModule,
    ModalModule
  ],
  entryComponents: [
    NtsModalComponent
  ],
  bootstrap: [
    DemoComponent
  ]
})
export class DemoModule { }
