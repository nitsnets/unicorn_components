import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from './demo.component';
import { HttpModule } from '@angular/http';
import { ModalModule } from '../src/components/containers/modal/modal.module';
import { NgModule } from '@angular/core';
import { NtsDemoModalContentComponent } from './demo-modal-content/demo-modal-content.component';
import { NtsModalComponent } from '../src/components/containers/modal/modal.component';
import { NtsModule } from '../src/nts.module';
import { NtsToastComponent } from '../src/components/utils/toast/toast.component';
import { NtsTooltipComponent } from '../src/components/utils/tooltip/tooltip.component';
import { ToastModule } from '../src/components/utils/toast/toast.module';
import { TooltipModule } from '../src/components/utils/tooltip/tooltip.module';

@NgModule({
    declarations: [
        DemoComponent,
        NtsDemoModalContentComponent
    ],
    imports: [
        NtsModule,
        BrowserModule,
        HttpModule,
        ModalModule,
        ToastModule,
        TooltipModule
    ],
    entryComponents: [
        NtsModalComponent,
        NtsDemoModalContentComponent,
        NtsToastComponent,
        NtsTooltipComponent
    ],
    bootstrap: [
        DemoComponent
    ]
})
export class DemoModule { }
