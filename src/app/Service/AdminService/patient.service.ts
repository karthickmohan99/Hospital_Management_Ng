import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  


  private baseUrl = `${environment.apiUrl}/api/patient`; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  getAllPatients(): Observable<any[]> {
    const url = `${this.baseUrl}/listall`; // Replace with your API endpoint to get all patients
    return this.http.get<any[]>(url);
  }
}
