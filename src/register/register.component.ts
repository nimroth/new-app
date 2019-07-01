import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WebService } from '../services/web.service';
import * as RegisterModel from './model/register.response';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  genders: RegisterModel.Gender[];

  constructor(private webService: WebService) { }

  basicDetails = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl()
  });

  communicationDetails = new FormGroup({
    houseNo: new FormControl(),
    colony: new FormControl(),
    mobileNumber: new FormControl(),
    email: new FormControl()
  });

  ngOnInit() {
    this.webService.getRequest('/gender', null).subscribe((data: RegisterModel.Gender[]) => {
      this.genders = data;
      console.log('gender data = ', this.genders);
    });
  }

}
