import { NgModule } from '@angular/core';
import { TooltipService } from './tooltip.service';
import { UniTooltipComponent } from './tooltip.component';
import { UniTooltipDirective } from './tooltip.directive';
import { UnicornModule } from '../../../unicorn.module';

@NgModule({
    imports: [
        UnicornModule
    ],
    declarations: [
        UniTooltipComponent,
        UniTooltipDirective
    ],
    providers: [
        TooltipService
    ],
    exports: [
        UniTooltipDirective
    ]
})
export class TooltipModule { }
