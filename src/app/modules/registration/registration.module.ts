import {NgModule} from "@angular/core";
import {RegistrationComponent} from "./registration.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./login.component";
import {NgbTabsetModule} from "@ng-bootstrap/ng-bootstrap/tabset/tabset.module";
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module";

@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    NgbTabsetModule,
    NgbDatepickerModule,
    ReactiveFormsModule
  ],
  exports: [
    RegistrationComponent
  ],
  providers: [
    //TODO(zygis): after rc6 routing move registration service here
  ]
})

export class RegistrationModule {
}
