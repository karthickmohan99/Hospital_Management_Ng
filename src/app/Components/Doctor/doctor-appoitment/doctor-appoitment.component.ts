import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AppointmentService } from 'src/app/Service/AppointmentService/appointment.service';

@Component({
  selector: 'app-doctor-appoitment',
  templateUrl: './doctor-appoitment.component.html',
  styleUrls: ['./doctor-appoitment.component.css']
})
export class DoctorAppoitmentComponent {
  appointments: any;
  selectedAppointment: any;
  p:number=1;
  itemsPerPage:number=5;
  total: any;
  constructor(private appointment: AppointmentService,private modalService: NgbModal,
    private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAppointments();
  }

  private getAppointments(){
    this.appointment.getAppointments().subscribe(data => {
      this.appointments = data;
      this.total = data.length;
    });
  }


  appointmentDetails(id: number){
    this.router.navigate(['appointment-details', id]);
  }

  updateAppointment(id: number){
    this.router.navigate(['update-appointment', id]);
  }

  deleteAppointments(id: number){
    this.appointment.deleteAppointment(id).subscribe( data => {
      console.log(data);
      this.toastr.success(data.body);
      this.router.navigate(['patient/mybooking']);
      this.getAppointments();
    })
  }

  openDetails(targetModal:any,appointment:any){
  
    this.selectedAppointment = { ...appointment };
    console.log(this.selectedAppointment,"view appointment")
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
   
  
  }
}
