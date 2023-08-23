import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DoctorserviceService } from 'src/app/Service/DoctorService/doctorservice.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent {
doctors: any;
  selectedDoctor: any;
  p:number=1;
  itemsPerPage:number=5;
  total: any;

  constructor(private doctorService: DoctorserviceService,private modalService: NgbModal,
    private router: Router) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  private getDoctors(){
    this.doctorService.getDoctors().subscribe(data => {
      this.doctors = data;
      this.total = data.length;
    });
  }


  doctorDetails(id: number){
    this.router.navigate(['doctor-details', id]);
  }

  updateDoctor(id: number){
    this.router.navigate(['update-doctor', id]);
  }

  deleteDoctor(id: number){
    this.doctorService.deleteDoctor(id).subscribe( data => {
      console.log(data);
      this.getDoctors();
    })
  }

  openDetails(targetModal:any,doctor:any){
  
    this.selectedDoctor = { ...doctor };
    console.log(this.selectedDoctor,"view doctor")
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
   
  
  }
}

