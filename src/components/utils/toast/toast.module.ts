import { NgModule } from '@angular/core';
import { ToastService } from './toast.service';
import { UniToastComponent } from './toast.component';
import { UnicornModule } from '../../../unicorn.module';

@NgModule({
    imports: [
        UnicornModule
    ],
    declarations: [
        UniToastComponent
    ],
    providers: [
        ToastService
    ],
    exports: [
        UniToastComponent
    ]
})
export class ToastModule { }
