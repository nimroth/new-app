import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import * as RegisterModel from '../model/register';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  genders: RegisterModel.IdValuePair[];
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

  constructor(
              private registerService: RegisterService
              ) { }

  ngOnInit() {
    this.registerService.getGender().subscribe((data: RegisterModel.IdValuePair[]) => {
      this.genders = data;
      console.log('gender data = ', this.genders);
    });
  }

}
