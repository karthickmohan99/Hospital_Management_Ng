import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private apiUrl = `${environment.apiUrl}/api/session`;
  
  constructor(private http: HttpClient) { }


  addSession(sessionData: any): Observable<any> {
    console.log(sessionData,"session data")
    return this.http.post(`${this.apiUrl}/add`, sessionData);
  }



  getAllSessions(): Observable<any> {
    const url = `${this.apiUrl}/listall`; 

    return this.http.get<any>(url)
      
  }

  deleteSession(sessionid: any): Observable<any> {
    const url = `${this.apiUrl}/delete/${sessionid}`;
    return this.http.delete(url);
  }

  updateSession(updatedSession: any): Observable<any> {
    const url = `${this.apiUrl}/update/${updatedSession.sid}`;
    return this.http.put(url, updatedSession);
  }
}
