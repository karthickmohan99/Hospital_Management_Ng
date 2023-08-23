import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PatientserviceService } from 'src/app/Service/PatientService/patientservice.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {

  patients: any;
  selectedPatient: any;
  p:number=1;
  itemsPerPage:number=5;
  total: any;
  constructor(private patientService: PatientserviceService,private modalService: NgbModal,
    private router: Router) { }

  ngOnInit(): void {
    this.getPatients();
  }

  private getPatients(){
    this.patientService.getPatients().subscribe(data => {
      this.patients = data;
      this.total = data.length;
    });
  }

  patientDetails(id: number){
    this.router.navigate(['patient-details', id]);
  }

  updatePatient(id: number){
    this.router.navigate(['update-patient', id]);
  }

  deletePatient(id: number){
    this.patientService.deletePatient(id).subscribe( data => {
      console.log(data);
      this.getPatients();
    })
  }

  openDetails(targetModal:any,patient:any){
  
    this.selectedPatient = { ...patient };
    console.log(this.selectedPatient,"view patient")
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
   
  
  }
}
