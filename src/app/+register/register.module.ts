import {NgModule} from "@angular/core";
import {MdCardModule} from "@angular2-material/card";
import {MdInputModule} from "@angular2-material/input";
import {FormsModule} from "@angular/forms";
import {RegisterComponent} from "./register.component";

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [RegisterComponent],
  declarations: [MdCardModule, MdInputModule]
})

export class RegisterModule {
}
