import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./modules/home/home.component";
import {RegistrationComponent} from "./modules/registration/registration.component";
import {DashboardComponent} from "./modules/admin/dashboard.component";

const appRoutes: Routes = [
  // { path: '**', component: PageNotFoundComponent } //TODO(zygis)
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'admin', component: DashboardComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
