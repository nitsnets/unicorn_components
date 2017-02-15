import { NgModule } from '@angular/core';

import { NtsModule } from '../../nts.module';

import { ToastService } from './toast.service';
import { NtsToastComponent } from './toast.component';


@NgModule({
    imports: [
        NtsModule
    ],
    declarations: [
        NtsToastComponent
    ],
    providers: [
        ToastService
    ],
    exports: [
        NtsToastComponent
    ]
})
export class ToastModule { }
