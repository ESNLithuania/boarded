import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import { AuthTokensService } from './auth-token.service';
import { User } from '../classes/user';

@Injectable()
export class RequestService {
  private url = 'http://homestead.app/api/';

  constructor(private http: Http, private authTokenService: AuthTokensService) {
  }

  public post(url, json, auth: Boolean = true): Observable<any> {
    let postHeaders = new Headers();
    postHeaders.append('Content-type', 'application/json');
    if (auth) {
      postHeaders = this.addAuthHeader(postHeaders)
    }

    return this.http
      .post(this.url + url, json, {headers: postHeaders})
      .map(res => res.json());
  }

  public put(url, json, auth: Boolean = true): Observable<any> {
    let postHeaders = new Headers();
    postHeaders.append('Content-type', 'application/json');
    if (auth) {
      postHeaders = this.addAuthHeader(postHeaders)
    }

    return this.http
               .put(this.url + url, json, {headers: postHeaders})
               .map(res => res.json());
  }

  public get(url, auth: Boolean = true): Observable<any> {
    let getHeaders = new Headers();
    if (auth) {
      getHeaders = this.addAuthHeader(getHeaders)
    }

    return this.http
      .get(this.url + url, {headers: getHeaders})
      .map(res => res.json());
  }

  public get auth(): any {
    return {
      login: (json) => {
        return this.post('auth/authenticate', JSON.stringify(json), false)
      }
    }
  }

  public get users(): any {
    return {
      all: () => {
        return this.get('users');
      },
      update: (user: User) => {
        return this.put(`users/${user.id}`, JSON.stringify(user));
      }
    }
  }

  private addAuthHeader(headers: Headers): Headers {
    let token = this.authTokenService.getCurrentUserToken().token;
    headers.append('Authorization', `Bearer ${token}`);
    return headers;
  }
}
