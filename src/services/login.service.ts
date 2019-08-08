import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { WebService} from './web.service';
import { Constants } from '../constants/constants';
import * as Model from '../model/login';
import * as RegisterModel from '../model/register';

const headers = new HttpHeaders({
  'Content-type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private api = Constants.api;

  constructor(private webService: WebService) { }

  getRole(): Observable<RegisterModel.IdValuePair[]> {
    return this.webService.get<object>(this.api.getRole, headers, undefined).pipe(map(
      (data: RegisterModel.IdValuePair[]) => {
        return data;
      }
    ));
  }
}
