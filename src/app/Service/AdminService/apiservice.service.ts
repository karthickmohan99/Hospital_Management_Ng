import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  private apiUrl = 'http://localhost:9001';
  constructor(private http: HttpClient) {}
     
  postRegisterData(userData: any): Observable<any> {
     console.log(userData,"api service")
    const url = `${this.apiUrl}/api/admin/register`;
    return this.http.post(url, userData);
  }

  postLoginData(loginData: any): Observable<any> {
    console.log(loginData,"api service")
   const url = `${this.apiUrl}/api/admin/login`;
   return this.http.post(url, loginData);
 }
}
