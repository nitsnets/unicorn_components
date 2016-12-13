import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {  NtsModule } from '../src/nts.module';

import { DemoComponent } from './demo.component';
import { NtsAddInfoComponent } from '../src/components/addinfo/addinfo.component';

import { NtsModalComponent  } from '../src/modules/modal/modal.component';
import { NtsToastComponent } from '../src/modules/toast/toast.component';
import { ModalModule } from '../src/modules/modal/modal.module';
import { ToastModule } from '../src/modules/toast/toast.module';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    NtsModule,
    BrowserModule,
    HttpModule,
    ModalModule,
    ToastModule
  ],
  entryComponents: [
    NtsModalComponent,
    NtsAddInfoComponent,
    NtsToastComponent
  ],
  bootstrap: [
    DemoComponent
  ]
})
export class DemoModule { }
