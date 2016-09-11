import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./components/home.component";
import {registrationRoutes} from "./modules/registration/registration.routing";
import {dashboardRoutes} from "./modules/dashboard/dashboard.routing";

declare var System;

const appRoutes: Routes = [
  // { path: '**', component: PageNotFoundComponent } //TODO(zygis)
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  ...registrationRoutes,
  ...dashboardRoutes
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
