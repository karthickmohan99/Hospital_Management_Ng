import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user: string | null;
  
  constructor(private router: Router) { }

  userAccess(){
    this.user=localStorage.getItem('SeesionUser');
    if(this.user){
      this.router.navigate(['/patient']);
    }else{
      this.router.navigate(['/patientlogin']);
    }
  }

  doctorAccess(){
    this.user=localStorage.getItem('SeesionDoctor');
    if(this.user){
      this.router.navigate(['/doctor']);
    }else{
      this.router.navigate(['/doctorlogin']);
    }
  }

  AdminAccess(){
    this.user=localStorage.getItem('SeesionAdmin');
    if(this.user){
      this.router.navigate(['/admin']);
    }else{
      this.router.navigate(['/adminlogin']);
    }
  }

}
