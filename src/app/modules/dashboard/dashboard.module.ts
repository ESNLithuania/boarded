import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { ManageUsersComponent } from './manage-users.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../../services/auth.service';
import {
  NgbPaginationModule,
  NgbPaginationConfig
} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    ManageUsersComponent,
  ],
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    NgbPaginationModule
  ],
  exports: [],
  providers: [AuthGuard, NgbPaginationConfig]
})

export class DashboardModule {
}
