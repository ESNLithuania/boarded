import {NgModule} from "@angular/core";
import {RegistrationComponent} from "./registration.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RegistrationService} from "./registration.service";

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    RegistrationComponent
  ],
  providers: [
    RegistrationService
  ]
})

export class RegistrationModule {}
