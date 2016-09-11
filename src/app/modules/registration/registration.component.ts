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

  tabIds = ['basic-info', 'section-info', 'address-info'];
  selectedId = this.tabIds[0];

  public toggleSelected() {
    this.selectedId = this.tabIds[(this.tabIds.indexOf(this.selectedId) + 1)];
  }

  user: User = new User();

  submitted = false;

  onSubmit() {
    console.log(this.user);
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