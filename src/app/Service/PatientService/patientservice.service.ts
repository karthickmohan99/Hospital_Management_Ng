import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {

    private apiUrl = `${environment.apiUrl}/api/patient`;

    private myBehaviorSubject = new BehaviorSubject<string>('patient');
    
    constructor(private http: HttpClient) { }
  
    addPatient(patientData: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/register`, patientData);
    }
  
    loginPatient(loginData: any): Observable<any> {
      console.log(loginData, "-----patient service")
      const url = `${this.apiUrl}/login`;
      return this.http.post(url, loginData);
    }
    getPatients(): Observable<any> {
      return this.http.get(`${this.apiUrl}/listall`);
    }

    viewPatients(id:number): Observable<any> {
      return this.http.get(`${this.apiUrl}/listbyid/${id}`);
    }

    getDetails(email:String): Observable<any> {
      return this.http.get(`${this.apiUrl}/listByName/${email}`);
    }
  
    updatePatient(updatedPatient: any): Observable<any> {
      const url = `${this.apiUrl}/update/${updatedPatient.pid}`;
      return this.http.put(url, updatedPatient);
    }
    deletePatient(id:number): Observable<any>{
      return this.http.delete(`${this.apiUrl}/delete/${id}`);
    }

    setValue(value: string) {
      this.myBehaviorSubject.next(value);
    }
  
    getValue() {
      return this.myBehaviorSubject.asObservable();
    }
  
  }