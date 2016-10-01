import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./components/home.component";
import {registrationRoutes} from "./modules/registration/registration.routing";
import {dashboardRoutes} from "./modules/dashboard/dashboard.routing";

declare var System;

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'contacts',
    component: HomeComponent
  },
  ...registrationRoutes,
  ...dashboardRoutes,
  { path: '**', redirectTo: '' },
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
