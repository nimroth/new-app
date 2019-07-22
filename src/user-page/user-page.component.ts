import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(private router: Router) { }

  option: string;
  option1 = 'Leave';
  option2 = 'Salary';
  option3 = 'Log Out';

  onSelect(option: string) {
    if (option === this.option1) {
      this.router.navigate(['dashboard/employee-list']);
    }
    if (option === this.option2) {
      this.router.navigate(['dashboard/employee-graph']);
    }
    if (option === this.option3) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
  }

}
