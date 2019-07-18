import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

import { WebService } from './web.service';
import { Constants } from '../constants/constants';
import * as Model from '../model/register.response';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
});

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private api = Constants.api;

  constructor(private webService: WebService) { }

  getGender(): Observable<Model.KeyValuePair[]> {
    return this.webService.get<object>(this.api.getGender,
      headers, undefined).pipe(map(
        (data: Model.KeyValuePair[]) => {
      return data;
    }
    ));
  }
  getEmployee(): Observable<Model.RegistrationDetails[]> {
    return this.webService.get<object>(this.api.employee,
      headers, undefined).pipe(map(
        (data: Model.RegistrationDetails[]) => {
          return data;
        }
      ));
  }
  getEmployeeUsingId(id: number): Observable<Model.RegistrationDetails[]> {
    return this.webService.get<object>(this.api.employee + '/' + id,
    headers, undefined).pipe(map(
      (data: Model.RegistrationDetails[]) => {
        return data;
      }
    ));
  }
  createEmployee(data: Model.RegistrationDetails): Observable<Model.RegistrationDetails> {
    return this.webService.post<object>(this.api.employee, data,
      headers, undefined).pipe(map(
        (empData: Model.RegistrationDetails) => {
          return empData;
        }
      ));
  }
}
