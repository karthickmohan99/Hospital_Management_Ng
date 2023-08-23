import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { PatientService } from 'src/app/Service/AdminService/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class AdminPatientComponent {
  
  searchText:string;
  currentDate: string = this.datePipe.transform(new Date(), 'yyyy-MM-dd') || '';
  patients: any[] = [];
  selectedPatient:any;
  p:number=1;
  itemsPerPage:number=5;
  total: any;


  constructor(private modalService: NgbModal,private datePipe: DatePipe,private patientService: PatientService){}


  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    this.patientService.getAllPatients().subscribe(
      (data: any[]) => {
        this.patients = data;
        this.total = data.length;
        console.log(this.patients, 'Patients');
      },
      (error: any) => {
        console.error('Error loading patients:', error);
      }
    );

}



openDetails(targetModal:any,patient:any){
  
  this.selectedPatient = { ...patient };
  console.log(this.selectedPatient,"view patient")
  this.modalService.open(targetModal, {
    centered: true,
    backdrop: 'static',
    size: 'lg'
  });
  console.log(patient.pId,"edit doctor");

}


Search(): void {
  if (this.searchText !== "") {
    let searchValue = this.searchText.toLocaleLowerCase();
    this.patients = this.patients.filter((patients: any) => {
      return patients.firstName.toLocaleLowerCase().includes(searchValue) ||
      patients.email.toLocaleLowerCase().includes(searchValue);
    });
  } else {
    // If the search text is empty, reset the list to show all doctors
    this.loadPatients();
  }
}
}
