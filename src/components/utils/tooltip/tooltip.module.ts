import { NgModule } from '@angular/core';
import { NtsModule } from '../../../nts.module';
import { NtsTooltipComponent } from './tooltip.component';
import { TooltipService } from './tooltip.service';

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
