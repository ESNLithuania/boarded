import {Injectable} from "@angular/core";
import {User} from '../classes/user';
import {Observable} from 'rxjs';
import {Http} from '@angular/http';

@Injectable()

export class UserService {
  private loggedIn = false;

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  public getUsers(): Observable<any> {
    return this.http.get('http://homestead.app/api/admin/members')
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