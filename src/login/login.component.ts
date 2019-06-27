import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WebService } from '../services/web.service';
import { LoginRequest } from './model/login.request';
import { LoginResponse } from './model/login.response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  errorMsg: string;
  private req: LoginRequest;
  private res: LoginResponse;

  constructor(private webService: WebService,
              private router: Router
    ) {
    this.req = new LoginRequest();
    this.res = new LoginResponse();
  }

  loginForm = new FormGroup({
    username: new FormControl(),
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

  loginService(request: LoginRequest) {
    this.webService.getRequest('/login', null).subscribe(data => {
      const response = JSON.parse(JSON.stringify(data));
      console.log('request data = ', request);
      console.log('response data = ', response);
      if ((request.username === response.username) && (request.password === response.password) ) {
        if (response.status === 'success') {
          console.log('data = ', response.message);
          this.router.navigate(['/dashboard']);
        }
      } else {
        console.log('username or password is incorrect');
        this.errorMsg = 'username or password is incorrect';
        document.getElementById('errorMsg').innerHTML = this.errorMsg;
      }
    });
  }
}
