import { Component, OnInit } from "@angular/core";
import { User } from '../../classes/user';
import { AuthService } from '../../services/auth.service';
@Component({
    selector: 'esn-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public user: User = new User();
  public currentRole: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.loggedInUser();
    this.currentRole = this.authService.role();
  }

  private loggedInUser() {
    const user: Promise<User> = this.authService.loggedInUser();
    user.then((res) => {
      this.user = res;
    });
  }
}
