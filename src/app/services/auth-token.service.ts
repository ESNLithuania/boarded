import { Injectable } from '@angular/core';

@Injectable()
export class AuthTokensService {
  public getCurrentUserToken() {
    return JSON.parse(localStorage.getItem('auth_token'));
  }
}
