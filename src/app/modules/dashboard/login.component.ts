import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'esn-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  userEmail: string;
  userPassword: string;


  constructor(private authService: AuthService) {
  }

  onSubmit() {
    this.authService
      .login()
  }
}
