import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SharedModule } from '../src/shared.module';

import { DemoComponent } from './demo.component';

import { GoModalComponent } from '../src/modules/modal/modal.component';
import { ModalModule } from '../src/modules/modal/modal.module';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpModule,
    ModalModule,
  ],
  entryComponents: [
    GoModalComponent
  ],
  bootstrap: [
    DemoComponent
  ]
})
export class DemoModule { }
