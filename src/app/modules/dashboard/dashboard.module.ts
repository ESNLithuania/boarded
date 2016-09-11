import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {LoginComponent} from "./login.component";
import {FormsModule} from "@angular/forms";
import {ManageUsersComponent} from "./manage-users.component";
import {RouterModule} from "@angular/router";
@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    ManageUsersComponent
  ],
  imports: [FormsModule, RouterModule],
  exports: []
})

export class DashboardModule {
}
