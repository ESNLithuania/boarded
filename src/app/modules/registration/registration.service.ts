import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class RegistrationService {

  constructor(private http: Http) {}

  getUsers (): Observable<any[]> {
    return this.http.get('http://localhost:3000/users')
      .map(_ => _.json())
      .catch(error => Observable.throw(error.message));
  }
}
