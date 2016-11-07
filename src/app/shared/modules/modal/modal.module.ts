import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared.module';

import { ModalService } from './modal.service';
import { GoModalComponent } from './modal.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        GoModalComponent,
    ],
    providers: [
        ModalService
    ],
    exports: [
        GoModalComponent,
    ]
})
export class ModalModule { }
