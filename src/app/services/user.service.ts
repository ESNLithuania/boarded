import {Injectable} from "@angular/core";
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import {User} from '../classes/user';
import {Observable} from 'rxjs';

@Injectable()

export class UserService {
  private loggedIn = false;

  constructor(public authHttp: AuthHttp) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  public getUsers(): Observable<any> {
    return this.authHttp.get('http://homestead.app/api/admin/members')
  }

  public login(email, password) {
    localStorage.setItem('auth_token', 'loggedIn');
    this.loggedIn = true;
  }

  public logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  public isLoggedIn() {
    return this.loggedIn;
  }
}