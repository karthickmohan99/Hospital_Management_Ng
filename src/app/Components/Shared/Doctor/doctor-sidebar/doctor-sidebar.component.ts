import { Component, Renderer2 } from '@angular/core';
import { DoctorserviceService } from 'src/app/Service/DoctorService/doctorservice.service';

@Component({
  selector: 'app-doctor-sidebar',
  templateUrl: './doctor-sidebar.component.html',
  styleUrls: ['./doctor-sidebar.component.css']
})
export class DoctorSidebarComponent {
  myValue: any;
  detail: any;

  constructor(private renderer: Renderer2,private apiService :DoctorserviceService) {
    this.myValue = this.apiService.getValue();

  console.log('----myValue',this.myValue);
  }

  ngOnInit() {
     
    this.getDta();

   
    
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