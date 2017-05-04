import { ANALYZE_FOR_ENTRY_COMPONENTS, ModuleWithProviders, NgModule, Type } from '@angular/core';

import { ModalService } from './modal.service';
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
export class ModalModule {
    static withComponents(entryComponents: Array<Type<any> | any[]>): ModuleWithProviders {
        return {
            ngModule: ModalModule,
            providers: [
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: entryComponents, multi: true }
            ]
        };
    }
}
