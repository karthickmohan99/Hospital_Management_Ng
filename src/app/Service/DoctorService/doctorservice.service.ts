
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {

  private apiUrl = `${environment.apiUrl}/api/doctor`;

  private myBehaviorSubject = new BehaviorSubject<string>('Doctor');


  constructor(private http: HttpClient) { }

  addDoctor(doctorData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, doctorData);
  }

  loginDoctor(loginData: any): Observable<any> {
    console.log(loginData, "-----doctor service")
    const url = `${this.apiUrl}/login`;
    return this.http.post(url, loginData);
  }
  getDoctors(): Observable<any> {
    return this.http.get(`${this.apiUrl}/listall`);
  }

  updateDoctor(updatedDoctor: any): Observable<any> {
    const url = `${this.apiUrl}/update/${updatedDoctor.did}`;
    return this.http.put(url, updatedDoctor);
  }

  deleteDoctor(id:number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  getDetails(email:String): Observable<any> {
    return this.http.get(`${this.apiUrl}/listByName/${email}`);
  }

  setValue(value: string) {
    this.myBehaviorSubject.next(value);
  }

  getValue() {
    return this.myBehaviorSubject.asObservable();
  }


}