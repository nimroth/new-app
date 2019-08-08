import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WebService } from '../services/web.service';
import { RegisterService } from '../services/register.service';
import { LoginService } from '../services/login.service';
import * as LoginModel from '../model/login';
import { LoginResponse } from './model/login.response';
import { Router } from '@angular/router';
import * as RegisterModel from '../model/register';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userData: RegisterModel.RegistrationDetails;
  roles: RegisterModel.IdValuePair[];
  hide = true;
  errorMsg: string;
  private req: LoginModel.LoginRequest;
  private res: LoginModel.LoginResponse;

  constructor(private webService: WebService,
              private registerService: RegisterService,
              private loginService: LoginService,
              private router: Router
    ) {
    this.req = new LoginModel.LoginRequest();
    this.res = new LoginModel.LoginResponse();
  }

  loginForm = new FormGroup({
    role: new FormControl(),
    id: new FormControl(),
    password: new FormControl()
  });

  ngOnInit() {
    this.loginService.getRole().subscribe((data) => {
      this.roles = data;
      console.log('roles = ', this.roles);
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.req = this.loginForm.value;
      this.loginCall(this.req);
    }
  }

  loginCall(request) {
    this.registerService.userLogin(request).subscribe((response) => {
      if (response.status === 200) {
        if (request.role === response.role) {
          if (request.password === response.password  || request.id === response.id) {
            if (request.role === '1') {
              this.router.navigate(['/dashboard']);
            } else {
              this.router.navigate(['/user-page'], { queryParams: { id: response.id } });
            }
          } else {
            this.errorMsg = 'username or password is incorrect';
            document.getElementById('errorMsg').innerHTML = this.errorMsg;
          }
        } else {
          this.errorMsg = 'Your role is not matching';
          document.getElementById('errorMsg').innerHTML = this.errorMsg;
        }
      }
    });
  }
}
