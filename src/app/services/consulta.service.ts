import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const base_url = 'https://dniruc.apisperu.com/api/v1';
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFyYW5pYmFyZ2Vyc29uMjhAZ21haWwuY29tIn0.ObOQyED4Nhtvm-b7bQpbxYGygJxqQqvop4VuqonMi-8';
@Injectable({
  providedIn: 'root',
})
export class ConsultaService {
  constructor(private http: HttpClient) {}

  list_users(type: any, number: any): Observable<any> {
    const url = `${base_url}/${type}/${number}?token=${token}`;
    return this.http.get(url);
  }
}
