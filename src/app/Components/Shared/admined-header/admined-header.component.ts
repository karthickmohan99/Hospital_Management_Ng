import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { PatientserviceService } from 'src/app/Service/PatientService/patientservice.service';

@Component({
  selector: 'app-admined-header',
  templateUrl: './admined-header.component.html',
  styleUrls: ['./admined-header.component.css']
})
export class AdminedHeaderComponent {
  myValue: any;
  detail: any;

  constructor(private apiService :PatientserviceService,  private router: Router) {
    this.myValue = this.apiService.getValue();

  console.log('----myValue',this.myValue);
  }

  ngOnInit() {
     
    this.getDta();
    
  }

  logout(){
    localStorage.removeItem('SeesionAdmin');
    
    this.router.navigate(['/adminlogin']);
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

  home() {
    const win: Window = window;
win.location = "/home";
   
  }
}
