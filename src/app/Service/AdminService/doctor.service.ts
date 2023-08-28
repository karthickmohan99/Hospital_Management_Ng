import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private apiUrl = `${environment.apiUrl}/api/doctor`;

  constructor(private http: HttpClient) { }

  addDoctor(doctorData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, doctorData);
  }

  getDoctors(): Observable<any> {
    return this.http.get(`${this.apiUrl}/listall`);
}

updateDoctor(updatedDoctor: any): Observable<any> {
  const url = `${this.apiUrl}/update/${updatedDoctor.did}`;
  return this.http.put(url, updatedDoctor);
}

deleteDoctor(doctorid: any): Observable<any> {
  const url = `${this.apiUrl}/delete/${doctorid}`; // Update endpoint URL
  return this.http.delete(url);
}

getDoctorById(id: number): Observable<any> {
  const url = `${this.apiUrl}/listbyid/${id}`; // Replace with your API endpoint to get doctor by ID
  return this.http.get(url);
}


}
