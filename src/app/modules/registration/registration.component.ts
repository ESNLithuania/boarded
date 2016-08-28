import {Component} from "@angular/core";
import {User} from "./user";
import {RegistrationService} from "./registration.service";

@Component({
  selector: 'esn-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {
  constructor(private registrationService: RegistrationService) {}
  user =  new User();
  users: User[];
  errorMessage: string;

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.registrationService.getUsers().subscribe(
      users => { this.users = users },
      error => this.errorMessage = error
    )
  }

  sections = [
    'VU',
    'VDU'
  ];


}