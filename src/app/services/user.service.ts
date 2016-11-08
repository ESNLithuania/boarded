import {Injectable} from '@angular/core';
import {RequestService} from './request.service';
import {User, Address} from '../classes/user';
import {Observable} from 'rxjs';

@Injectable()

export class UserService {

  constructor(private request: RequestService) {
  }

  public getUsers(): Observable<any> {
    return this.request
      .users
      .all();
  }

  public updateUser(user: User): Observable<any> {
    return this.request
      .users
      .update(user)
      .subscribe(() => {})
  }

}
