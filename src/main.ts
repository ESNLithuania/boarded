///<reference path="../typings/globals/hammerjs/index.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/index';
import { appRouterProviders } from './app/index';
if (process.env.ENV === 'production') {
  enableProdMode();
}
bootstrap(AppComponent, [
    appRouterProviders
])
.catch(err => console.error(err));
