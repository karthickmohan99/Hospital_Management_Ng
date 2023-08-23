import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppointmentService } from 'src/app/Service/AppointmentService/appointment.service';
import { PatientserviceService } from 'src/app/Service/PatientService/patientservice.service';
import { SessionServiceService } from 'src/app/Service/SessionService/session-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  bookings: any;
  p:number=1;
  itemsPerPage:number=2;
  total: any;


  constructor(
    private sessionService: SessionServiceService,private appoitnment:AppointmentService,
    private router: Router,private toastr: ToastrService,private apiService :PatientserviceService){}

    ngOnInit(): void {
      this.getAppointmentss();
    }
  
    private getAppointmentss(){
      this.appoitnment.getAppointments().subscribe(data => {
        this.bookings = data;
        this.total =data.length;
        console.log(data);
        
      });
    }
  
  
    appointmentsDetails(id: number){
      this.router.navigate(['appointments-details', id]);
    }
  
    updateAppointments(id: number){
      this.router.navigate(['update-appointments', id]);
    }
  
    deleteAppointments(id: number){
      this.appoitnment.deleteAppointment(id).subscribe( data => {
        console.log(data);
        Swal.fire({
          title: 'Are you sure want to cancel?',
          text: 'You will not be able to meet the doctor!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, cancel it!',
          cancelButtonText: 'No, keep it'
        }).then((result) => {
          if (result.value) {
            Swal.fire(
              'Deleted!',
              'Your booking has been deleted.',
              'success'
            )
            
            // this.router.navigate(['patient/mybooking']);
            this.getAppointmentss();
          } 
        })
      
      })
    }
  }