import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { WebService } from '../services/web.service';
import * as RegisterModel from './model/register.response';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  genders: RegisterModel.KeyValuePair[];
  chkboxData: RegisterModel.KeyValuePair[];
  chipData: string[] = [];
  // basicDetails: FormGroup;
  basicDetails = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    dateOfBirth: new FormControl(),
    gender: new FormControl()
  });
  communicationDetails = new FormGroup({
    houseNo: new FormControl(),
    colony: new FormControl(),
    mobileNumber: new FormControl('',  [
      Validators.pattern('[1-9]{1}[0-9]{9}'),
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),
      Validators.minLength(7),
      Validators.maxLength(50),
    ])
  });
  details = new FormGroup({
    check: new FormControl()
  });
  passwordDetails = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w]).{7,}$'),
      Validators.pattern('^(?=.*[!@#$%^&*])(?=.*[a-z]).{5,9}$'),
      // Validators.pattern('^(?=.*\d)(?=.*[a-zA-Z!@#$%^&*])(?!.*\s).{6,100}$'),
      Validators.minLength(7),
      Validators.maxLength(50),
    ]),
    confirmPassword: new FormControl('', Validators.required)
  });

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
              private frmBuilder: FormBuilder,
              private validationService: ValidationService
    ) {
      this.commonForm = this.validationService.getCommonForm();
      this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
  }

  ngOnInit() {

    this.webService.getRequest('/gender', null).subscribe((data: RegisterModel.KeyValuePair[]) => {
      this.genders = data;
      console.log('gender data = ', this.genders);
    });
    this.webService.getRequest('/chkboxvalues', null).subscribe((data: RegisterModel.KeyValuePair[]) => {
      this.chkboxData = data;
      console.log('select data = ', this.chkboxData);
    });
    this.webService.getRequest('/chipData', null).subscribe((data: any) => {
      this.chipData = data;
      console.log('select data = ', this.chipData);
    });
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
