import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {





  private baseUrl = `${environment.apiUrl}/api/appointment`; 
  

  constructor(private http: HttpClient) {}

  getAppointments(): Observable<any[]> {
    const getUrl = `${this.baseUrl}/listall`;
    
    return this.http.get<any[]>(getUrl);
  }


  deleteAppointment(appointmentId: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${appointmentId}`;
    return this.http.delete(url);
  }

  
}
