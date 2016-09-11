import {RouterModule, Route} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {LoginComponent} from "./login.component";
import {ManageUsersComponent} from "./manage-users.component";
export const dashboardRoutes: Route[] = [
  {
    path: 'clr',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: ManageUsersComponent
      },
      {
        path: 'dashboard',
        component: LoginComponent
      }
    ]
  },
];

export const dashboardRouting: ModuleWithProviders =
  RouterModule.forChild(dashboardRoutes);