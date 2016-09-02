import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
@Injectable
export class UserService {
  private loggedIn = false;

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
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