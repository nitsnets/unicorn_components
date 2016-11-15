import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './404/404.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app/app.component';

import { UsersComponent } from './app/users/users.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { HomeComponent } from './app/home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';

export const mainRoutingProviders: any[] = [ ];

export const mainRouting: ModuleWithProviders = RouterModule.forRoot([
    { path: '',
      component: AppComponent,
      canActivate: [AuthGuard],
      children: [
        { path: '', component: HomeComponent, data: {
                title: 'Home'
            }
        },
        { path: 'dashboard', component: DashboardComponent, data: {
                title: 'Dashboard'
            }
        },
        { path: 'users', component: UsersComponent, data: {
                title: 'Users'
            }
        }
      ]
    },
    { path: 'login',   component: LoginComponent },
    { path: '**',      component: PageNotFoundComponent }
]);
