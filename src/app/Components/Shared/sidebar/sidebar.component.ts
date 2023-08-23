import { Component, Renderer2, OnInit } from '@angular/core';
import { PatientLoginComponent } from '../../Authentication/Patient/patient-login/patient-login.component';
import { PatientserviceService } from 'src/app/Service/PatientService/patientservice.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [PatientLoginComponent]
})
export class SidebarComponent implements OnInit  {

  userLogged: any;
  myValue: any;
  detail: any;
  constructor(private renderer: Renderer2,private utiliz: PatientLoginComponent,private apiService :PatientserviceService) {
    this.myValue = this.apiService.getValue();

  console.log('----myValue',this.myValue);
  }

  ngOnInit() {
     
    this.getDta();

    this.userLogged=this.utiliz.usersData;//this displays "bla" on my toolbar  
    console.log('----------',this.userLogged);
    
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
