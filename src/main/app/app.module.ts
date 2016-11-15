import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';


import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './header/';
import { MenuComponent } from './header/menu/menu.component';
import { UsersModule } from './users/users.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    MenuComponent,
  ],
  imports: [
    SharedModule,

    HomeModule,
    DashboardModule,
    UsersModule,

  ],
  providers: [
  ],
  exports: [
    AppComponent
  ]
})
export class AppModule { }
