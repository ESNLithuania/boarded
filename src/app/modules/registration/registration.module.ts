import {NgModule} from "@angular/core";
import {RegistrationComponent} from "./registration.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

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
  ]
})

export class RegistrationModule {}
