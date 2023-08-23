import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppointmentService } from 'src/app/Service/AppointmentService/appointment.service';
import { DoctorserviceService } from 'src/app/Service/DoctorService/doctorservice.service';
import { PatientserviceService } from 'src/app/Service/PatientService/patientservice.service';
import { SessionServiceService } from 'src/app/Service/SessionService/session-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  myValue: any;
  allDoc: any;
  allPat: any;
  allBook: any;
  allSec: any;


  constructor(private route: ActivatedRoute, 
    private sessionService: SessionServiceService,private appoitnment:AppointmentService,
    private router: Router,private toastr: ToastrService,private apiService :PatientserviceService,private doctorService: DoctorserviceService) {
      this.myValue = this.apiService.getValue();

    console.log('----myValue',this.myValue);

     }

  ngOnInit(): void {

    this.getSessions();
    this.getDoctors();
    this.getPatients();
    this.getBookings();
    

   
  }

 
  getDoctors(){

    this.sessionService.getSessions().subscribe((res)=>{
      console.log(res,"--------res");
      console.log(res.length,"--------res");

      this.allDoc=res.length;
      
  },(err)=>{
    console.log(err,"-----------error")
  })
  }

  getSessions(){

    this.doctorService.getDoctors().subscribe((res)=>{
      console.log(res,"--------res");
      console.log(res.length,"--------res");

      this.allSec=res.length;
      
  },(err)=>{
    console.log(err,"-----------error")
  })
  }
      

  

  getPatients(){

    this.apiService.getPatients().subscribe((res)=>{
      console.log(res,"--------res");
      console.log(res.length,"--------res");
      this.allPat=res.lengthl
  },(err)=>{
    console.log(err,"-----------error")
  })
  }

  getBookings(){

    this.appoitnment.getAppointments().subscribe((res)=>{
      console.log(res,"--------res");
      console.log(res.length,"--------res");
      this.allBook=res.length;
  },(err)=>{
    console.log(err,"-----------error")
  })
  }

  

}
