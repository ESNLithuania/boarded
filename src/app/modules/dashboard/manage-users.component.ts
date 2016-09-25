import {Component} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Observable} from 'rxjs';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'esn-dashboard-manage-users',
  templateUrl: 'manage-users.component.html',
  styleUrls: ['manage-users.component.scss']
})
export class ManageUsersComponent {

  constructor(private userService: UserService, private authService: AuthService) {
  }

  get users(): Observable<any> {
    return this.userService.getUsers();
  }

  private login() {
    this.authService
      .login()
      .subscribe(() => {
        console.log('res');
      })
  }
}
