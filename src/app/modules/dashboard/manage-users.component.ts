import {Component} from "@angular/core";
@Component({
  selector: 'esn-dashboard-manage-users',
  templateUrl: 'manage-users.component.html',
  styleUrls: ['manage-users.component.scss']
})
export class ManageUsersComponent {
  users: Array<string> = ['test1', 'tes2']
}
