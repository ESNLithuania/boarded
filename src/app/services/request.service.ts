import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Http, Headers} from '@angular/http';

@Injectable()
export class RequestService {
  private url = 'http://homestead.app/api/';

  constructor(private http: Http) {
  }

  //todo(better url handling)
  post(url, json): Observable<any> {
    let postHeaders = new Headers();
    postHeaders.append('Content-type', 'application/json');

    return this.http
      .post(this.url + url, json, {headers: postHeaders})
      .map(res => res.json());
  }
}