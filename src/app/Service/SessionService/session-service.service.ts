import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {

  private apiUrl = `${environment.apiUrl}/api/session`;

  private myBehaviorSubject = new BehaviorSubject<number>(0);
  
  constructor(private http: HttpClient) { }

  addSession(sessionData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, sessionData);
  }

  getSessions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/listall`);
  }

  viewSessions(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/listbyid/${id}`);
  }

  updateSession(updatedSession: any): Observable<any> {
    const url = `${this.apiUrl}/update/${updatedSession.pid}`;
    return this.http.put(url, updatedSession);
  }
  deleteSession(id:number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  setttedValue(value: number) {
    this.myBehaviorSubject.next(value);
  }

  getttedValue() {
    return this.myBehaviorSubject.asObservable();
  }

}