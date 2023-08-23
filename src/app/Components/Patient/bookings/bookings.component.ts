import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppointmentService } from 'src/app/Service/AppointmentService/appointment.service';
import { PatientserviceService } from 'src/app/Service/PatientService/patientservice.service';
import { SessionServiceService } from 'src/app/Service/SessionService/session-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {

  id: number
  i:any;
  appnum:any;
  session: any;
  date:any;
  patientid:any;
  sessionid:any;
myVar:any;
  
  dataall: {};
  dataSharingService: any;
  receivedData: any;
  emailLogin: any;
  myValue: any;


  constructor(private route: ActivatedRoute, 
    private sessionService: SessionServiceService,private appoitnment:AppointmentService,
    private router: Router,private toastr: ToastrService,private apiService :PatientserviceService) {
      this.myValue = this.apiService.getValue();
      this.appnum = this.appoitnment.getValue();
      
    // console.log('----appnum',this.appnum);

     }

  ngOnInit(): void {

    this.getDta();
    
    this.id = this.route.snapshot.params['id'];

    // console.log('----emaillogin',this.myValue.source._value);
    
    

    this.sessionService.viewSessions(this.id).subscribe( data => {
     

    
      if(data.appointmentNumber === this.appnum.source._value){
        
        
        this.i="Full";
        
        
      }else{
        this.i=this.appnum.source._value
       
    
      
      }
      console.log(this.appnum,"--------appointment number");
      
      this.session = data;
    


      console.log(data);
      
    });
  }

 
  

  

  getDta(){
    const email =this.myValue.source._value;
    this.apiService.getDetails(email).subscribe((res)=>{
     
  this.patientid=res.pid;
    
   
     
      // console.log(res,"--------res");
      // console.log(email,"--------data");
  },(err)=>{
    console.log(err,"-----------loginerror")
  })
  }




  addSession(){
    const datas = {
      patients: {
        pid:this.patientid 
      },
      session: {
        sid: this.session.sid
      },
      sessionDate: this.session.sessionDate,
      appno: this.i
    };
    console.log('----',datas);
    
    this.appoitnment.addAppointment(datas).subscribe(
      response => {
        // console.log(response,"posted Data");
        // this.signupForm.reset();
        Swal.fire(
        
          'Booking Successfully!',
          'Your Appointment Number is : '+this.i
        )
        
        
        // console.log('appointmentl sucess', response);
        const id =response.apId;

        this.appoitnment.viewAppointments(id).subscribe((res)=>{
         
          // for (let index = 0; index < res.length; index++) {
          //   const element = res[index];
          //   console.log(element);
            
            
          // }
            
          // this.appnum=res.appno
  this.sessionService.setttedValue(res.appno)

             
              
              // console.log(this.appnum,"--------appointment number");
              
          },(err)=>{
            console.log(err,"-----------loginerror")
          })
      },
      error => {
        this.toastr.warning("Something went wrong")
        console.error('appointmentl error', error);
      }
    );
  }
}
