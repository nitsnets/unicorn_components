import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
