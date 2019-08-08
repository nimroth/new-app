import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

import { WebService } from './web.service';
import { Constants } from '../constants/constants';
import * as Model from '../model/register';
import * as LoginModel from '../model/login';

const headers = new HttpHeaders({
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private api = Constants.api;

  constructor(private webService: WebService) { }

  getGender(): Observable<Model.IdValuePair[]> {
    return this.webService.get<object>(this.api.getGender, headers, undefined).pipe(map(
      (data: Model.IdValuePair[]) => {
        return data;
      }
    ));
  }
  getUserId(): Observable<Model.UsedID> {
    return this.webService.get<object>(this.api.getUserId, headers, undefined).pipe(map(
      (data: Model.UsedID) => {
        return data;
      }
    ));
  }
  getUser(): Observable<Model.RegistrationDetails[]> {
    return this.webService.get<object>(this.api.getUser, headers, undefined).pipe(map(
      (data: Model.RegistrationDetails[]) => {
        return data;
      }
    ));
  }
  userLogin(reqData: LoginModel.LoginRequest): Observable<LoginModel.LoginResponse> {
    return this.webService.post<object>(this.api.userLogin, reqData, headers, undefined).pipe(map(
      (data: LoginModel.LoginResponse) => {
        return data;
      }
    ));
  }
  // getEmployeeUsingId(id: number): Observable<Model.RegistrationDetails[]> {
  //   return this.webService.get<object>(this.api.employee + '/' + id,
  //   headers, undefined).pipe(map(
  //     (data: Model.RegistrationDetails[]) => {
  //       return data;
  //     }
  //   ));
  // }
  createEmployee(data: Model.RegistrationDetails): Observable<Model.RegistrationDetails> {
    return this.webService.post<object>(this.api.createUser, data, headers, undefined).pipe(map(
        (empData: Model.RegistrationDetails) => {
          return empData;
        }
      ));
  }
}
