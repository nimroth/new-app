import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  userId: number;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute
              ) { }

  option: string;
  option1 = 'My Dashboard';
  option2 = 'Leave';
  option3 = 'Salary';
  option4 = 'Log Out';

  onSelect(option: string) {
    if (option === this.option1) {
      this.router.navigate(['user-page/user-dashboard']);
    }
    if (option === this.option2) {
      this.router.navigate(['user-page/leave']);
    }
    if (option === this.option3) {
      this.router.navigate(['user-page/salary']);
    }
    if (option === this.option4) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.userId = params['userId'];
      console.log('user id = ', this.userId);
    });
  }

}
