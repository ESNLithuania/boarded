import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { User } from '../classes/user';
import { Observable } from 'rxjs';
import { SelectValue } from '../modules/dashboard/manage-users.component';

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

  public getSections(): Observable<Array<SelectValue>> {
    return this.request
               .users
               .sections()
  }

}
