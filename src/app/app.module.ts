import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './header/';
import { MenuComponent } from './header/menu/menu.component';
import { GoModalComponent } from './shared/modules/modal/modal.component';
import { ModalModule } from './shared/modules/modal/modal.module';
import { UsersModule } from './users/users.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    MenuComponent
],
  imports: [
    SharedModule,
    BrowserModule,
    HttpModule,
    ModalModule,
    routing,

    HomeModule,
    DashboardModule,
    UsersModule
  ],
  providers: [
    appRoutingProviders
  ],
  entryComponents: [
    GoModalComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
