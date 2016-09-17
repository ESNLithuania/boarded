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
@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    ManageUsersComponent
  ],
  imports: [FormsModule, RouterModule],
  exports: [],
  // providers: [canActivateDashboard, UserToken, Permissions]
})

export class DashboardModule {
}

// class UserToken {}
// class Permissions {
//   canActivate(user: UserToken, id: string): boolean {
//     return true;
//   }
// }
//
// @Injectable()
// class canActivateDashboard implements CanActivate {
//   constructor(private permissions: Permissions, private currentUser: UserToken) {}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean>|Promise<boolean>|boolean {
//     return this.permissions.canActivate(this.currentUser, route.params.id);
//   }
// }
