import {Component, ViewEncapsulation} from "@angular/core";
import {User} from "../../classes/user";
import {RegistrationService} from "./registration.service";

@Component({
  selector: 'esn-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent {
  constructor(private registrationService: RegistrationService) {
  }

  user: User = new User();

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

  positions = [
    'ESN\'er',
    'Mentor',
    'Both'
  ]


}