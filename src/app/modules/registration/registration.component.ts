import {Component} from "@angular/core";
import {User} from "./user";
import {RegistrationService} from "./registration.service";

@Component({
  selector: 'esn-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {
  constructor(private registrationService: RegistrationService) {
  }

  user = new User();

  submitted = false;

  onSubmit() {
    this.registrationService.addUser(this.user)
      .subscribe((res: User) => {
        this.submitted = true;
      });
  }

  sections = [
    'VU',
    'VDU'
  ];


}