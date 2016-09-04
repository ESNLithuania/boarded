import {Routes, RouterModule, Route} from "@angular/router";
import {RegistrationComponent} from "./registration.component";
import {ModuleWithProviders} from "@angular/core";
import {LoginComponent} from "./login.component";
export const registrationRoutes: Route[] = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
];

export const registrationRouting: ModuleWithProviders =
  RouterModule.forChild(registrationRoutes);