import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./modules/home/home.component";
import {DashboardComponent} from "./modules/admin/dashboard.component";
import {registrationRoutes} from "./modules/registration/registration.routing";

const appRoutes: Routes = [
  // { path: '**', component: PageNotFoundComponent } //TODO(zygis)
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'admin', component: DashboardComponent},
  ...registrationRoutes
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
