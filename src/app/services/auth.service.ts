import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private http: Http, private request: RequestService) {
    // this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(email, password): Observable<boolean> {
    return this.request
      .auth
      .login({
        email: email,
        password: password
      })
      .map((response) => {
        let token = response && response.token;
        if (token) {
          localStorage.setItem('auth_token', JSON.stringify({
            email: email,
            token: token
          }));
          return true;
        } else {
          return false;
        }
      })
  }

  public logout() {
    // localStorage.removeItem('auth_token');
  }

  public loggedIn() {
    // return tokenNotExpired();
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    // console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate() {
    if (localStorage.getItem('auth_token')) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
