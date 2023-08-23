import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {





  private baseUrl = 'http:localhost:9001/api/appointment'; 

  constructor(private http: HttpClient) {}

  getAppointments(): Observable<any[]> {
    const getUrl = 'http:localhost:9001/api/appointment/listall';
    
    return this.http.get<any[]>(getUrl);
  }


  deleteAppointment(appointmentId: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${appointmentId}`;
    return this.http.delete(url);
  }

  
}
