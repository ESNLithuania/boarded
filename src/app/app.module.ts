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
import {NavbarComponent} from "./shared/navbar/navbar.component";
import {CommonModule} from "@angular/common";
import {AngularFireModule} from "angularfire2";

//TODO(zygis): all these declarations need to be split into separate modules

const firebaseConfig = {
  apiKey: "<your-key>",
  authDomain: "<your-project-authdomain>",
  databaseURL: "<your-database-URL>",
  storageBucket: "<your-storage-bucket>"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    routing,
    // Forms
    FormsModule,
    // Material Design
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    //Firebase
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {
}