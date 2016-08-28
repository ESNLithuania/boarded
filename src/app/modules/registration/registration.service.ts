import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {User} from "./user";

@Injectable()
export class RegistrationService {

  baseUrl = 'http://localhost:3000/users';

  constructor(private http: Http) {
  }

  getUsers(): Observable<any[]> {
    return this.http.get(this.baseUrl)
      .map(_ => _.json())
      .catch(error => Observable.throw(error.message));
  }

  addUser(newUser: User): Observable<User> {
    let body = JSON.stringify(newUser);
    console.log(body);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(this.baseUrl, body, options)
      .map(_ => _.json())
      .catch(error => {
        console.log(error.message);
        return Observable.throw(error.message)
      })
  }


}
