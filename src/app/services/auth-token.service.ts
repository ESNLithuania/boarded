import { Injectable } from '@angular/core';

export interface AuthToken {
  email: string,
  token: string,
  expires: number,
  role: string
}

@Injectable()
export class AuthTokenService {
  public currentUserToken() {
    return JSON.parse(localStorage.getItem('auth_token'));
  }

  public currentRole() {
    const json: AuthToken = JSON.parse(localStorage.getItem('auth_token'));
    return window.atob(json.role);
  }

  public tokenIsValid(): boolean {
    const token = this.currentUserToken();
    if (token) {
      return token.expires > (Date.now() / 1000);
    } else {
      return false;
    }
  }

}
