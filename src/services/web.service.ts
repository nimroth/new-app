import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WebService {
  constructor(private http: HttpClient) { }

  get<T>(url: string, headers: HttpHeaders, params: HttpParams): Observable<T> {
    return this.http.get<T>(url, {headers, params});
  }

  post<T>(url: string, body: T, headers: HttpHeaders, params: HttpParams): Observable<T> {
    return this.http.post<T>(url, body, { headers, params});
  }

  put<T>(url: string, body: T, headers: HttpHeaders, params: HttpParams): Observable<T> {
    return this.http.put<T>(url, body, {params});
  }

  // public loginRequest(): Observable<any> {
  //   return this.http.get('http://localhost:3000/login');
  // }
}
