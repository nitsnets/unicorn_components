import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent, data: {
            title: 'Home'
        }
    },
    {
        path: 'dashboard', component: DashboardComponent, data: {
            title: 'Dashboard'
        }
    },
    {
        path: 'users', component: UsersComponent, data: {
            title: 'Users'
        }
    }/*,
    {
        path: '**', component: NotFoundComponent, data: {
            title: 'Page not found'
        }
    }*/
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
