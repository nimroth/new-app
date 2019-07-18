import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {

  constructor(private router: Router) {
  }

  option: string;
  option1 = 'Employee List';
  option2 = 'Employee Graph';
  option3 = 'Account Settings';
  option4 = 'Log Out';

  onSelect(option: string) {
    if (option === this.option1) {
      this.router.navigate(['dashboard/employee-list']);
    }
    if (option === this.option2) {
      this.router.navigate(['dashboard/employee-graph']);
    }
    if (option === this.option3) {
      this.router.navigate(['dashboard/account-settings']);
    }
    if (option === this.option4) {
      this.router.navigate(['login']);
    }
  }
}
