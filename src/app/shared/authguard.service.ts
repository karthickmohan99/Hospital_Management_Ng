import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor() { }

  isLoggedIn(){
    return localStorage.getItem('SeesionUser') || localStorage.getItem('SeesionDoctor') || localStorage.getItem('SeesionAdmin');
  }
}
