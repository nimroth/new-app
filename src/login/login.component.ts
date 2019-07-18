import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WebService } from '../services/web.service';
import { RegisterService } from '../services/register.service';
import * as LoginModel from '../model/login';
import { LoginResponse } from './model/login.response';
import { Router } from '@angular/router';
import * as RegisterModel from '../model/register.response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userData: RegisterModel.RegistrationDetails;
  hide = true;
  errorMsg: string;
  private req: LoginModel.LoginRequest;
  private res: LoginModel.LoginResponse;

  constructor(private webService: WebService,
              private registerService: RegisterService,
              private router: Router
    ) {
    this.req = new LoginModel.LoginRequest();
    this.res = new LoginModel.LoginResponse();
  }

  loginForm = new FormGroup({
    id: new FormControl(),
    password: new FormControl()
  });

  ngOnInit() {
  }

  login() {
    if (this.loginForm.valid) {
      this.req = this.loginForm.value;
      this.loginService(this.req);
    }
  }

  loginService(request: LoginModel.LoginRequest) {
    // this.webService.getRequest('/employeeData/', null).subscribe(data => {
    //   const response = JSON.parse(JSON.stringify(data));
    //   console.log('request data = ', request);
    //   console.log('response data = ', response.password);
    //   if (request.password === response.password) {
    //       console.log('data = ', response.message);
    //       this.router.navigate(['/dashboard']);
    //   } else {
    //     console.log('username or password is incorrect');
    //     this.errorMsg = 'username or password is incorrect';
    //     document.getElementById('errorMsg').innerHTML = this.errorMsg;
    //   }
    // });
    this.registerService.getEmployeeUsingId(request.id).subscribe((data) => {
      const response = JSON.parse(JSON.stringify(data));
      console.log('request data = ', request);
      console.log('response data = ', response.password);
      if (request.password === response.password) {
          console.log('data = ', response.message);
          this.router.navigate(['/dashboard']);
      } else {
        console.log('username or password is incorrect');
        this.errorMsg = 'username or password is incorrect';
        document.getElementById('errorMsg').innerHTML = this.errorMsg;
      }
    });
  }
}
