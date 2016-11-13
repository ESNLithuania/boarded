import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import { AuthTokenService } from './auth-token.service';
import { User } from '../classes/user';

@Injectable()
export class RequestService {
  private url = 'http://homestead.app/api/';

  constructor(private http: Http, private authTokenService: AuthTokenService) {
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
        return this.post('auth/authenticate', JSON.stringify(json), false);
      },
      authenticatedUser: () => {
        return this.get('auth/authenticatedUser');
      },
      roles: () => {
        return Observable.from([
          [
            {
              id: 11,
              name: 'administrator'
            },
            {
              id: 12,
              name: 'section_responsible'
            }
          ]
        ]);
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
      },
      sections: () => {
        return Observable.from([
          [
            {
              id: 1,
              name: 'ESN ISLB'
            },
            {
              id: 2,
              name: 'ESN VDK'
            },
            {
              id: 3,
              name: 'ESN SMK'
            },
            {
              id: 4,
              name: 'ESN MRU Vilnius'
            },
            {
              id: 5,
              name: 'ESN LT Alumni club'
            },
            {
              id: 6,
              name: 'ESN LSU'
            },
            {
              id: 7,
              name: 'ESN LSMU'
            },
            {
              id: 8,
              name: 'ESN LEU'
            },
            {
              id: 9,
              name: 'ESN KUK'
            },
            {
              id: 10,
              name: 'ESN KTU Kaunas'
            },
            {
              id: 11,
              name: 'ESN KK Kaunas'
            },
            {
              id: 12,
              name: 'ESN VGTU'
            },
            {
              id: 13,
              name: 'ESN Vilnius University'
            },
            {
              id: 14,
              name: 'ESN VMU Kaunas'
            },
            {
              id: 15,
              name: 'ESN ŠU'
            },
            {
              id: 16,
              name: 'ESN ISM'
            },
          ]
        ])
      }
    }
  }

  private addAuthHeader(headers: Headers): Headers {
    let token = this.authTokenService.currentUserToken().token;
    headers.append('Authorization', `Bearer ${token}`);
    return headers;
  }
}
