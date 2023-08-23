import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  


  private baseUrl = 'http://localhost:9001/api/patient'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  getAllPatients(): Observable<any[]> {
    const url = `${this.baseUrl}/listall`; // Replace with your API endpoint to get all patients
    return this.http.get<any[]>(url);
  }
}
