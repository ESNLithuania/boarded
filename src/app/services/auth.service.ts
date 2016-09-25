import {Injectable} from '@angular/core';
import {tokenNotExpired, AuthHttp} from 'angular2-jwt';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {RequestService} from './request.service';

@Injectable()

export class AuthService {

  constructor(private authHttp: AuthHttp, private http: Http, private request: RequestService) {
    // this.loggedIn = !!localStorage.getItem('auth_token');
  }

  // public login(email = 'admin@admin.lt', password = 'secret') {
  //   console.log('i am at login');
  //
  //   this.http
  //     .post('http://homestead.app/api/auth/authenticate',
  //       JSON.stringify())
  //     .map(res => res.json())
  //     .catch(this.handleError)
  //     .subscribe((data => {
  //         // console.log(data);
  //       }, err => {
  //         // console.log(err)
  //       }));
  //   // localStorage.setItem('auth_token', 'loggedIn');
  // }

  login(email = 'admin@admin.lt', password = 'secret'): Observable<boolean> {
    return this.request
      .auth
      .login({
        email: email,
        password: password
      })
      .map((response) => {
        // login successful if there's a jwt token in the response
        let token = response && response.token;
        if (token) {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('auth_token', JSON.stringify({
            email: email,
            token: token
          }));

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      })
  }

  public logout() {
    // localStorage.removeItem('auth_token');
  }

  public loggedIn() {
    return tokenNotExpired();
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    // console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}