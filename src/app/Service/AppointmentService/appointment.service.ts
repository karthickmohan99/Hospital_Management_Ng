import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private apiUrl = `${environment.apiUrl}/api/appointment`;

  private myBehaviorSubject = new BehaviorSubject<number>(0);

  
  constructor(private http: HttpClient) { }

  addAppointment(appointmentData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, appointmentData);
  }

  getAppointments(): Observable<any> {
    return this.http.get(`${this.apiUrl}/listall`);
  }

  viewAppointments(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/listbyid/${id}`);
  }

  updateAppointment(updatedAppointment: any): Observable<any> {
    const url = `${this.apiUrl}/update/${updatedAppointment.pid}`;
    return this.http.put(url, updatedAppointment);
  }
  deleteAppointment(id: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  setValue(value: number) {
    this.myBehaviorSubject.next(value);
  }

  getValue() {
    return this.myBehaviorSubject.asObservable();
  }
}
