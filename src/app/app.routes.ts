import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './index';
import { RegisterRoutes } from './+register/index';

const routes: RouterConfig = [
  { path: '', component: AppComponent },
  ...RegisterRoutes
];

export const appRouterProviders = [
  provideRouter(routes)
];
