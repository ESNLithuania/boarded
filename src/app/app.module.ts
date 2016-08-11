import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {MdButtonModule} from "@angular2-material/button";
import {MdToolbarModule} from "@angular2-material/toolbar";
import {MdCardModule} from "@angular2-material/card";
import {MdInputModule} from "@angular2-material/input";
import {routing, appRoutingProviders} from "./app.routing";
import {HomeComponent} from "./+home/home.component";
import {RegisterComponent} from "./+register/register.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    // Forms
    FormsModule,
    // Material Design
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {
}