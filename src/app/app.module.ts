import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import SharedModule from "./modules/shared/shared.module";
import {routing, appRoutingProviders} from "./app.routing";
import {HomeModule} from "./modules/home/home.module";
import {RegistrationModule} from "./modules/registration/registration.module";
import {HttpModule} from "@angular/http";
import {AdminModule} from "./modules/admin/admin.module";
import {UserService} from "./services/user.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    NgbModule,
    SharedModule,
    HomeModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    UserService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
