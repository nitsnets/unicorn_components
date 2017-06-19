import { ANALYZE_FOR_ENTRY_COMPONENTS, ModuleWithProviders, NgModule, Type } from '@angular/core';

import { ModalService } from './modal.service';
import { UniModalComponent } from './modal.component';
import { UnicornComponentsModule } from '../../../unicorn.module';

@NgModule({
    imports: [
        UnicornComponentsModule
    ],
    declarations: [
        UniModalComponent,
    ],
    providers: [
        ModalService
    ],
    exports: [
        UniModalComponent,
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
