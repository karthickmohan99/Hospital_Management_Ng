import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';  

import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { DoctorService } from 'src/app/Service/AdminService/doctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class AdminDoctorComponent {

  
  editMode: boolean = false;
  searchText: string = '';
  doctors: any[] = [];  
  closeResult:string;
  selectedDoctor: any = {};
  p:number=1;
  itemsPerPage:number=5;
  total: any;
  fieldTextType: boolean;
  repeatFieldTextType: boolean;
  error:boolean=false;
  passwordIsValid: boolean;
  password: string;
  patternError: boolean;


  constructor(private modalService: NgbModal,private doctorService: DoctorService,private toastr: ToastrService,private datePipe: DatePipe ){}
  currentDate: string = this.datePipe.transform(new Date(), 'yyyy-MM-dd') || '';


  ngOnInit(): void {
    this.fetchDoctors();
  }
  
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleRepeatFieldTextType() {
    this.repeatFieldTextType = !this.repeatFieldTextType;
  }
  
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openDetails(targetModal:any,doctor:any,editMode: boolean) {
    this.editMode = editMode;
    this.selectedDoctor = { ...doctor };
    this.modalService.open(targetModal, {ariaLabelledBy: 'modal-basic-title',
    centered: true,
    size:'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // openDetails(targetModal:any,doctor:any,editMode: boolean){
  //   this.editMode = editMode;
  //   this.selectedDoctor = { ...doctor };
  //   this.modalService.open(targetModal, {
  //     centered: true,
  //     backdrop: 'static',
  //     size: 'lg'
  //   });
  //   console.log(doctor.did,"edit doctor");
  

  // }

 
  

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit(formData: NgForm){
    console.log(formData,"addform")
    this.doctorService.addDoctor(formData).subscribe(
      response => {

        if(response.msg == "Email already exist"){
          this.toastr.warning(response.msg)  
        }else{
          if (response.code == 404) {
            this.toastr.warning(response.msg)
         }
         else{
        
          console.log('Doctor added successfully:', response);
          this.fetchDoctors();
  
          this.modalService.dismissAll();
          this.toastr.success('Doctor added successfully')
           
         }
        }

       
        
             },
      error => {
        console.error('Error adding doctor:', error);
        this.toastr.warning('Something went wrong!')
      
      }
    );
    
    

   
  }


  onEdit(): void{
    this.doctorService.updateDoctor(this.selectedDoctor).subscribe(
      (response) => {
        console.log('Doctor updated successfully:', response);
        this.toastr.success('Doctor updated successfully')
        this.fetchDoctors();
      },
      (error) => {
        console.error('Error updating doctor:', error);
        this.toastr.warning('Something went wrong!')

      }
    );
    this.modalService.dismissAll();
  }

  show(value:string){
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:',<.>/?[\]\\|]).{8,}$/;
    if(value.length==0){
     
      this.error=true
      this.patternError=false
     
     
    }else{
     
     if(passwordPattern.test(value)){
      this.patternError=false
     }else{
      this.patternError=true
     }
     this.error=false
    
 
    }
 
   }

  validatePassword() {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:',<.>/?[\]\\|]).{8,}$/;
    this.passwordIsValid = passwordPattern.test(this.password);
  }
  //get request
  fetchDoctors(): void {
    this.doctorService.getDoctors().subscribe(
      (response) => {
        console.log(response,"doctor get request")
        this.doctors = response;
        this.total = response.length;
        console.log(this.doctors,"doctor get request222")
      },
      (error) => {
        console.error('Error fetching doctors:', error);
      }
    );
  }
  

  //delete doctor
  deleteDoctor(doctorid: any): void {
    console.log(doctorid,"doctorid");
    this.doctorService.deleteDoctor(doctorid).subscribe(
      () => {
        console.log(`Doctor with ID ${doctorid} deleted successfully`);
        Swal.fire({
          title: 'Are you sure want to delete?',
          text: 'You will not be able to retair the doctor!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, cancel it!',
          cancelButtonText: 'No, keep it'
        }).then((result) => {
          if (result.value) {
            Swal.fire(
              'Deleted!',
              'Doctor has been deleted.',
              'success'
            )
            
            // this.router.navigate(['patient/mybooking']);
            this.fetchDoctors();
          } 
        })
        
        
        
      },
      (error:HttpErrorResponse) => {
        console.error(`Error deleting doctor with ID ${doctorid}`, error);
       
      }
    );
  }

  //search filter

  // Search(): void {
  //   if (this.searchText !== "") {
  //     let searchValue = this.searchText.toLocaleLowerCase();
  //     this.doctors = this.doctors.filter((doctor: any) => {
  //       return doctor.firstName.toLocaleLowerCase().includes(searchValue) ||
  //              doctor.email.toLocaleLowerCase().includes(searchValue);
  //     });
  //   } else {
  //     // If the search text is empty, reset the list to show all doctors
  //     this.fetchDoctors();
  //   }
  // }
}
