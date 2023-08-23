import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorserviceService } from 'src/app/Service/DoctorService/doctorservice.service';

@Component({
  selector: 'app-doctor-header',
  templateUrl: './doctor-header.component.html',
  styleUrls: ['./doctor-header.component.css']
})
export class DoctorHeaderComponent {
  myValue: any;
  detail: any;

  constructor(private apiService :DoctorserviceService,  private router: Router) {
    this.myValue = this.apiService.getValue();

  console.log('----myValue',this.myValue);
  }

  ngOnInit() {
     
    this.getDta();
    
  }

  home() {
    const win: Window = window;
win.location = "/home";
   
  }

  logout(){
    localStorage.removeItem('SeesionDoctor');
    
    this.router.navigate(['/doctorlogin']);
  }

  getDta(){
    const email =this.myValue.source._value;
    this.apiService.getDetails(email).subscribe((res)=>{ 
      
      this.detail=res;
      console.log(res,"--------res");
      console.log(email,"--------data");
  },(err)=>{
    console.log(err,"-----------loginerror")
  })
  }
}

