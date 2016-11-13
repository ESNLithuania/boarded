import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';
import { CanActivate, Router } from '@angular/router';
import { User } from '../classes/user';
import { AuthTokenService, AuthToken } from './auth-token.service';

@Injectable()
export class AuthService {

  constructor(private http: Http,
              private request: RequestService,
              private authTokenService: AuthTokenService) {
  }

  public login(email, password): Observable < boolean > {
    return this
      .request
      .auth
      .login({
        email: email,
        password: password
      })
      .map((response) => {
        if (response && response.token && response.expires) {
          localStorage.setItem('auth_token', JSON.stringify(<AuthToken>{
            email: window.btoa(email),
            token: response.token,
            expires: new Date(Date.now() + response.expires * 60000).getTime()
                     / 1000,
            role: window.btoa(response.role)
          }));
          return true;
        } else {
          return false;
        }
      })
  }

  public role(): string {
    if (this.authTokenService.tokenIsValid()) {
      return this.authTokenService.currentRole();
    }
  }

  public roles(): Promise<any> {
    return this.request
               .auth.roles()
               .map(_ => _)
               .toPromise();
  }

  public loggedInUser(): Promise<User> {
    if (this.authTokenService.tokenIsValid()) {
      return this.request
                 .auth
                 .authenticatedUser()
                 .map((user) => {
                   if (user) {
                     return user.user;
                   }
                 })
                 .toPromise()
    } else {
      return new Promise((res, rej) => {
        res(new User())
      });
    }
  }

  public logout() {
    localStorage.removeItem('auth_token');
  }

  private handleError(error: any) {
    let errMsg = (error.message)
      ? error.message
      :
                 error.status
                   ? `${error.status} - ${error.statusText}`
                   : 'Server error';
    // console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authTokenService: AuthTokenService) {
  }

  canActivate() {
    if (!this.authTokenService.tokenIsValid()) {
      this.router.navigate(['/login']);
    } else {
      return true;
    }
  }


}
