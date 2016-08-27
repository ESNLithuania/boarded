import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./modules/home/home.component";

const appRoutes: Routes = [
  // { path: '**', component: PageNotFoundComponent } //TODO(zygis)
  { path: '', component: AppComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
