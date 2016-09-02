import {Component} from "@angular/core";
import {User} from "../../classes/user";
@Component({
  selector: 'esn-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  user: User = new User();

  onSubmit() {
    console.log('submitted');
  }
}
