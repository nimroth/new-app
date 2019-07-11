import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  currentYear: number = new Date().getFullYear();
  constructor(private formBuilder: FormBuilder) { }

  getCommonForm(): FormGroup {
    return this.formBuilder.group({
      userName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(256),
      ]),
        // this.validUserNameTaken.bind(this)
      ],
      firstName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),
        Validators.minLength(7),
        Validators.maxLength(256),
      ]),
        // this.validEmailNotTaken.bind(this)
      ],
      passwordGroup: this.formBuilder.group({
        password: ['', Validators.compose([
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w]).{7,}$'),
          Validators.minLength(7),
          Validators.maxLength(256),
        ])],
        confirmPassword: ['', Validators.required],
      }),
      yearofBirth: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[1-2][0-9][0-9][0-9]$'),
        Validators.min(1900),
        Validators.max(this.currentYear),
      ])],
      gender: ['', Validators.compose([Validators.required])],
    });
  }
}
