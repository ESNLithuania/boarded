import {NgModule} from "@angular/core";
import {MdCardModule} from "@angular2-material/card";
import {MdInputModule} from "@angular2-material/input";
import {FormsModule} from "@angular/forms";
import {RegisterComponent} from "./register.component";
import {MdButtonModule} from "@angular2-material/button";

@NgModule({
  imports: [
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    FormsModule
  ],
  declarations: [RegisterComponent],
})

export class RegisterModule {
}
