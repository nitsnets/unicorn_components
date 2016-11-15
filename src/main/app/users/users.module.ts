import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [SharedModule],
  declarations: [UsersComponent],
  exports: [UsersComponent]
})
export class UsersModule { }
