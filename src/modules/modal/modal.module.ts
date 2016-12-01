import { NgModule } from '@angular/core';

import {  NtsModule } from '../../nts.module';

import { ModalService } from './modal.service';
import { NtsModalComponent } from './modal.component';

@NgModule({
    imports: [
         NtsModule
    ],
    declarations: [
        NtsModalComponent,
    ],
    providers: [
        ModalService
    ],
    exports: [
        NtsModalComponent,
    ]
})
export class ModalModule { }
