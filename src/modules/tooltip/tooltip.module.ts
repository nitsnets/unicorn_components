import { NgModule } from '@angular/core';

import { NtsModule } from '../../nts.module';

import { TooltipService } from './tooltip.service';
import { NtsTooltipComponent } from './tooltip.component';


@NgModule({
    imports: [
        NtsModule
    ],
    declarations: [
        NtsTooltipComponent
    ],
    providers: [
        TooltipService
    ],
    exports: [
        NtsTooltipComponent
    ]
})
export class TooltipModule { }
