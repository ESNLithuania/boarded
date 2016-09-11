import {Component} from "@angular/core";
import {User} from "../../classes/user";
import {UserService} from "../../services/user.service";
@Component({
  selector: 'esn-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  userEmail: string;
  userPassword: string;


  constructor(private userService: UserService) {}

  onSubmit() {
    console.log(this.userEmail, this.userPassword);
  }
}
