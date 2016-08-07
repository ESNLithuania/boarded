///<reference path="../typings/globals/hammerjs/index.d.ts"/>
import {bootstrap} from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";
import {AppComponent} from "./app/index";
import {disableDeprecatedForms, provideForms} from "@angular/forms";
import {appRouterProviders} from "./app/app.routes";
if (process.env.ENV === 'production') {
  enableProdMode();
}
bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  appRouterProviders
])
  .catch(err => console.error(err));
