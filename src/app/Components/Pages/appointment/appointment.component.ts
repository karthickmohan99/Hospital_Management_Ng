import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ToastrService } from 'ngx-toastr';  
import { AppointmentService } from 'src/app/Service/AppointmentService/appointment.service';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AdminAppointmentComponent {

  currentDate: string = this.datePipe.transform(new Date(), 'yyyy-MM-dd') || '';
  appointments: any;
  p:number=1;
  itemsPerPage:number=5;
  total: any;


  constructor(private modalService: NgbModal,private datePipe: DatePipe,private appointmentService: AppointmentService,private toastr: ToastrService){}
     

 

  
  ngOnInit(): void {
    this.getAppointments();
  }

  private getAppointments(){
    this.appointmentService.getAppointments().subscribe(data => {
      this.appointments = data;
      this.total = data.length;
      console.log(data);
      
    });
  }


  // viewSessions(id: number){
  //   this.router.navigate(['/bookings', id]);
  // }

  // updateSession(id: number){
  //   this.router.navigate(['update-session', id]);
  // }

  deleteAppointment(id: number){
    this.appointmentService.deleteAppointment(id).subscribe( data => {
      console.log(data);
      Swal.fire({
        title: 'Are you sure want to cancel?',
        text: 'You will not be able to retair the appointment!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, cancel it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Deleted!',
            'Your appointment has been deleted.',
            'success'
          )
          
          // this.router.navigate(['patient/mybooking']);
          this.getAppointments();
        } 
      })
      
    })
  }

 

}
