import {NgModule, Injectable} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {LoginComponent} from "./login.component";
import {FormsModule} from "@angular/forms";
import {ManageUsersComponent} from "./manage-users.component";
import {
  RouterModule, CanActivate, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";
import {Observable} from "rxjs";
import {CommonModule} from "@angular/common";
import {AuthGuard} from '../../services/auth.service';
@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    ManageUsersComponent
  ],
  imports: [FormsModule, RouterModule, CommonModule],
  exports: [],
  providers: [AuthGuard]
})

export class DashboardModule {
}