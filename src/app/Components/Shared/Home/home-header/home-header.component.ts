import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent {

  user: string | null;
  
  constructor(private router: Router) { }
  home() {
    const win: Window = window;
win.location = "/home";
   
  }
  
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

