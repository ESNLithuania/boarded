import { Routes, RouterModule }   from '@angular/router';
import {HomeComponent} from "./+home/home.component";
import {RegisterComponent} from "./+register/register.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);