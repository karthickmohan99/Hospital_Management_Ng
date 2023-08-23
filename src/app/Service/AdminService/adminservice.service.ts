import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  private apiUrl = 'http://localhost:9001';
  constructor(private http: HttpClient) {}
     
  postRegisterData(userData: any): Observable<any> {
     console.log(userData,"------admin service")
    const url = `${this.apiUrl}/api/admin/register`;
    return this.http.post(url, userData);
  }

  postLoginData(loginData: any): Observable<any> {
    console.log(loginData,"-----admin service")
   const url = `${this.apiUrl}/api/admin/login`;
   return this.http.post(url, loginData);
 }

 getDetails(email:String): Observable<any> {
  return this.http.get(`${this.apiUrl}/listByName/${email}`);
}
}