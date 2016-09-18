import {Component} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";
@Component({
  selector: 'esn-dashboard-manage-users',
  templateUrl: 'manage-users.component.html',
  styleUrls: ['manage-users.component.scss']
})
export class ManageUsersComponent {
  users: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.users = af.database.list('users');
  }
}
