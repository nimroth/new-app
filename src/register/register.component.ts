import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, OnInit, ElementRef, ViewChild, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgModel } from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { WebService } from '../services/web.service';
import { RegisterService } from '../services/register.service';
import * as RegisterModel from '../model/register.response';
import { ValidationService } from '../services/validation.service';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private registerReq: RegisterModel.RegistrationDetails;
  genders: RegisterModel.KeyValuePair[];
  chkboxData: RegisterModel.KeyValuePair[];
  employeeId: number;
  generatedEmployeeId: number;
  chipData: string[] = [];
  firstName: string;
  // tslint:disable-next-line: new-parens
  // @Output() userData = new EventEmitter<>();
  // communicationDetails = new FormGroup({
  //   houseNo: new FormControl(),
  //   colony: new FormControl(),
  //   mobileNumber: new FormControl('',  [
  //     Validators.pattern('[1-9]{1}[0-9]{9}'),
  //     Validators.required
  //   ]),
  //   email: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),
  //     Validators.minLength(7),
  //     Validators.maxLength(50),
  //   ])
  // });
  // details = new FormGroup({
  //   check: new FormControl()
  // });
  // passwordDetails = new FormGroup({
  //   password: new FormControl('', [
  //     Validators.required,
  //     // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w]).{7,}$'),
  //     Validators.pattern('^(?=.*[!@#$%^&*])(?=.*[a-z]).{5,9}$'),
  //     // Validators.pattern('^(?=.*\d)(?=.*[a-zA-Z!@#$%^&*])(?!.*\s).{6,100}$'),
  //     Validators.minLength(7),
  //     Validators.maxLength(50),
  //   ]),
  //   confirmPassword: new FormControl('', Validators.required)
  // });

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  commonForm: FormGroup;

  @ViewChild('fruitInput', {static: false}) fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;

  constructor(private webService: WebService,
              private registerService: RegisterService,
              private frmBuilder: FormBuilder,
              private validationService: ValidationService,
              private datePipe: DatePipe,
              private route: Router
    ) {
      this.registerReq = new RegisterModel.RegistrationDetails();
      this.commonForm = this.validationService.getCommonForm();
      this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
  }

  basicDetails = this.frmBuilder.group({
    id: this.frmBuilder.control('', Validators.required),
    firstName: this.frmBuilder.control('', Validators.required),
    lastName: this.frmBuilder.control('', Validators.required),
    dateOfBirth: this.frmBuilder.control('', Validators.required),
    gender: this.frmBuilder.control('', Validators.required),
    mobileNumber: this.frmBuilder.control('', Validators.compose([
      Validators.pattern('[1-9]{1}[0-9]{9}'),
      Validators.required
    ])),
    email: this.frmBuilder.control('', Validators.compose([
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),
      Validators.minLength(7),
      Validators.maxLength(50),
    ])),
    password: this.frmBuilder.control('', Validators.compose([
      Validators.required,
      // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w]).{7,}$'),
      Validators.pattern('^(?=.*[!@#$%^&*])(?=.*[a-z]).{5,9}$'),
      // Validators.pattern('^(?=.*\d)(?=.*[a-zA-Z!@#$%^&*])(?!.*\s).{6,100}$'),
      Validators.minLength(7),
      Validators.maxLength(50),
    ])),
    // confirmPassword: this.frmBuilder.control('', Validators.compose([Validators.required]))
  });

  ngOnInit() {
    this.basicDetails.controls.id.disable();
    this.registerService.getGender().subscribe((data: RegisterModel.KeyValuePair[]) => {
      this.genders = data;
      console.log('gender data = ', this.genders);
    });
    // this.webService.getRequest('/gender', null).subscribe((data: RegisterModel.KeyValuePair[]) => {
    //   this.genders = data;
    //   console.log('gender data = ', this.genders);
    // });
    // this.webService.getRequest('/chkboxvalues', null).subscribe((data: RegisterModel.KeyValuePair[]) => {
    //   this.chkboxData = data;
    //   console.log('select data = ', this.chkboxData);
    // });
    // this.webService.getRequest('/chipData', null).subscribe((data: any) => {
    //   this.chipData = data;
    //   console.log('select data = ', this.chipData);
    // });
    // this.webService.getRequest('/employeeData', null).subscribe((data: RegisterModel.RegistrationDetails[]) => {
    //   if (data) {
    //     data.forEach(res => {
    //       this.employeeId = res.id;
    //     });
    //     console.log('emp id = ', this.employeeId);
    //     this.generatedEmployeeId = (this.employeeId === undefined ? 101 : this.employeeId + 1);
    //   }
    //   console.log('gen id data = ', this.generatedEmployeeId);
    // });
    this.registerService.getEmployee().subscribe((data: RegisterModel.RegistrationDetails[]) => {
      if (data) {
        data.forEach(res => {
          this.employeeId = res.id;
        });
        console.log('emp id = ', this.employeeId);
        this.generatedEmployeeId = (this.employeeId === undefined ? 101 : this.employeeId + 1);
      }
      console.log('gen id data = ', this.generatedEmployeeId);
    });
  }

  createEmployee(valid: boolean, formData: RegisterModel.RegistrationDetails) {
    if (valid) {
      formData.id = this.generatedEmployeeId;
      formData.dateOfBirth = this.datePipe.transform(formData.dateOfBirth, 'MM-dd-yyyy');
      const registerData: RegisterModel.RegistrationDetails = {
        role: 'user',
        id: formData.id,
        firstName: formData.firstName,
        lastName: formData.lastName,
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender,
        mobileNumber: formData.mobileNumber,
        email: formData.email,
        password: formData.password
      };
      console.log('register data = ', this.basicDetails.value);
      // this.webService.postRequest('/employeeData', registerData, null, null).subscribe((data => {
      //   console.log('post data = ', data);
      //   if (data) {
      //     this.route.navigate(['/register/thank-you'], { queryParams: { userData: data}});
      //     this.firstName = data.firstName;
      //   }
      // }));
      this.registerService.createEmployee(registerData).subscribe((empData: RegisterModel.RegistrationDetails) => {
        if (empData) {
          this.firstName = empData.firstName;
        }
      });
    }
  }

  comparePassword(group: any) {
    console.log('compare pwd = ', group);
    const pass = group.value;
    return (pass.password === pass.confirmPassword) ? undefined : {
      // console.log('invalid = ', invalid),
      invalid: true,
    };
  }

  add(event: MatChipInputEvent): void {
    console.log('add event = ', event);
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.fruits.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.fruitCtrl.setValue(null);
    }
  }

  remove(fruit: string): void {
    console.log('remove called = ', fruit);
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    console.log('event selected = ', event);
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

}
