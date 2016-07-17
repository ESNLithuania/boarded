import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './index';
const routes: RouterConfig = [
  { path: '/', component: AppComponent },
];

export const appRouterProviders = [
  provideRouter(routes)
];
