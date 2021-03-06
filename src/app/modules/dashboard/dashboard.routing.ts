import {
  RouterModule, Route, CanActivate,
  ActivatedRouteSnapshot, RouterStateSnapshot
} from "@angular/router";
import {ModuleWithProviders, Injectable} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {LoginComponent} from "./login.component";
import {ManageUsersComponent} from "./manage-users.component";
import {AuthGuard} from '../../services/auth.service';
export const dashboardRoutes: Route[] = [
  {
    path: 'clr',
    component: DashboardComponent,
    canActivate: [AuthGuard],
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
