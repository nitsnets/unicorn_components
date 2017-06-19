import { NgModule } from '@angular/core';
import { TooltipService } from './tooltip.service';
import { UniTooltipComponent } from './tooltip.component';
import { UniTooltipDirective } from './tooltip.directive';
import { UnicornComponentsModule } from '../../../unicorn.module';

@NgModule({
    imports: [
        UnicornComponentsModule
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
