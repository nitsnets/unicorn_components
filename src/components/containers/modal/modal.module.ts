import { ModalService } from './modal.service';
import { NgModule } from '@angular/core';
import { NtsModalComponent } from './modal.component';
import { NtsModule } from '../../../nts.module';

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
