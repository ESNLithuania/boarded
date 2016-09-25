import {Component} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Observable} from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {User, Address} from '../../classes/user';
@Component({
  selector: 'esn-dashboard-manage-users',
  templateUrl: 'manage-users.component.html',
  styleUrls: ['manage-users.component.scss']
})
export class ManageUsersComponent {
  private users: Array<User> = [];

  constructor(private userService: UserService, private authService: AuthService) {
  }

  loadUsers() {
    this.userService
      .getUsers()
      .subscribe((data) => {
        this.users = data.map((user) => {
          return new User(user.name, user.surname, user.section_id, user.position_id, user.phone_number, user.email, user.date_of_birth, new Address(user.street_address, user.street_building, user.city));
        })
      })
  }

  private login() {
    this.authService
      .login()
      .subscribe(() => {
        console.log('res');
      })
  }
}
