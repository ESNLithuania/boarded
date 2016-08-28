import {Component} from "@angular/core";
import {User} from "./user";

@Component({
  selector: 'esn-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {
  user =  new User();

  sections = [
    'VU',
    'VDU'
  ];


}