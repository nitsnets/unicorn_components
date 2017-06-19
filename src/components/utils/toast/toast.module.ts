import { NgModule } from '@angular/core';
import { ToastService } from './toast.service';
import { UniToastComponent } from './toast.component';
import { UnicornComponentsModule } from '../../../unicorn.module';

@NgModule({
    imports: [
        UnicornComponentsModule
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
