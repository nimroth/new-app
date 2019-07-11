import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WebService } from '../services/web.service';
import * as RegisterModel from '../register/model/register.response';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  genders: RegisterModel.KeyValuePair[];
  accountSettings = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    mobileNumber: new FormControl('',  [
      Validators.pattern('[1-9]{1}[0-9]{9}'),
      Validators.required
    ]),
    dateOfBirth: new FormControl(),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),
      Validators.minLength(7),
      Validators.maxLength(50),
    ])
  });

  constructor(private webService: WebService) { }

  ngOnInit() {
    this.webService.getRequest('/gender', null).subscribe((data: RegisterModel.KeyValuePair[]) => {
      this.genders = data;
      console.log('gender data = ', this.genders);
    });
  }

}
