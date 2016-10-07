import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'esn-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  userEmail: string;
  userPassword: string;
  loginError: boolean = false;


  constructor(private authService: AuthService, private router: Router) {
  }

  private onSubmit() {
    this.authService
      .login(this.userEmail, this.userPassword)
      .subscribe((res: boolean) => {
          if(res) {
            this.router.navigate(['/clr']);
          } else {
            this.showLoginError();
          }
        },
        (err: Error) => {
          this.showLoginError(err.message);//todo: this goes away later
        })
  }

  private showLoginError(msg?: string) {
    this.loginError = true;
  }

  private hideLoginError() {
    this.loginError = false;
  }
}
