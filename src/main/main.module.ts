import { AuthenticationService } from './shared/services/auth.service';
import { ApiService } from './shared/services/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';

import { mainRouting, mainRoutingProviders } from './main.routing';

import { MainComponent } from './main.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './404/404.component';

import { GoModalComponent } from './shared/modules/modal/modal.component';
import { ModalModule } from './shared/modules/modal/modal.module';
import { AppModule } from './app/app.module';
import { AuthGuard } from './shared/guards/auth.guard';

@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpModule,
    ModalModule,
    mainRouting,

    AppModule
  ],
  providers: [
    mainRoutingProviders,

    ApiService,
    AuthenticationService,
    AuthGuard
  ],
  entryComponents: [
    GoModalComponent
  ],
  bootstrap: [
    MainComponent
  ]
})
export class MainModule { }
