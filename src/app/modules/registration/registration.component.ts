import {Component} from "@angular/core";
import {User} from "./user";
import {RegistrationService} from "./registration.service";
import {Observable} from "rxjs";

@Component({
  selector: 'esn-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {
  constructor(private registrationService: RegistrationService) {}
  user =  new User();

  onSubmit() {
    console.log('submitted!');
    this.registrationService.addUser(this.user)
      .subscribe((res: User) => console.log(res));
  }

  sections = [
    'VU',
    'VDU'
  ];


}