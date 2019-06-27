import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  configUrl = environment.apiUrl;

  constructor(private httpService: HttpClient) { }

  getRequest<T>(urlType: string, params: HttpParams) {
    return this.httpService.get(this.configUrl + urlType, {params});
  }

  postRequest<T>(urlType: string, req: T, params: HttpParams): Observable<T> {
    return this.httpService.post<T>(this.configUrl + urlType, req, {params});
  }

  putRequest<T>(urlType: string, req: T, params: HttpParams): Observable<T> {
    return this.httpService.put<T>(this.configUrl + urlType, req, {params});
  }

  // public loginRequest(): Observable<any> {
  //   return this.httpService.get('http://localhost:3000/login');
  // }
}
