import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { PatientserviceService } from 'src/app/Service/PatientService/patientservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  myValue: any;
  detail: any;
  constructor(private apiService :PatientserviceService,  private router: Router) {
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
    localStorage.removeItem('SeesionUser');
    
    this.router.navigate(['/patientlogin']);
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
