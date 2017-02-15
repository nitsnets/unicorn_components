import { NgModule } from '@angular/core';
import { NtsModule } from '../../../nts.module';
import { NtsToastComponent } from './toast.component';
import { ToastService } from './toast.service';

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
