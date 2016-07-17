import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './index';
import { RegisterRoutes } from './+register/index';
import { HomeRoutes } from './+home/index';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...RegisterRoutes
];

export const appRouterProviders = [
  provideRouter(routes)
];
