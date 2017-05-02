import { NgModule } from '@angular/core';
import { NtsModule } from '../../../nts.module';
import { NtsTooltipComponent } from './tooltip.component';
import { NtsTooltipDirective } from './tooltip.directive';
import { TooltipService } from './tooltip.service';

@NgModule({
    imports: [
        NtsModule
    ],
    declarations: [
        NtsTooltipComponent,
        NtsTooltipDirective
    ],
    providers: [
        TooltipService
    ],
    exports: [
        NtsTooltipDirective
    ]
})
export class TooltipModule { }
