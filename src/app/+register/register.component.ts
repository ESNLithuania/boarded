import {Component} from "@angular/core";
import {User} from '../+users/user';

@Component({
  selector: 'b-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent {
  user = new User();

}
