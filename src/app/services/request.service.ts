import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Http, Headers} from '@angular/http';

@Injectable()
export class RequestService {
  private url = 'http://homestead.app/api/';

  constructor(private http: Http) {
  }

  public post(url, json): Observable<any> {
    let postHeaders = new Headers();
    postHeaders.append('Content-type', 'application/json');

    return this.http
      .post(this.url + url, json, {headers: postHeaders})
      .map(res => res.json());
  }

  public get(url): Observable<any> {
    return this.http
      .get(this.url + url)
      .map(res => res.json());
  }

  public get auth(): any {
    return {
      login: (json) => {
        return this.post('auth/authenticate', JSON.stringify(json))
      }
    }
  }

  public get users(): any {
    return {
      all: () => {
        return this.get('users');
      }
    }
  }
}