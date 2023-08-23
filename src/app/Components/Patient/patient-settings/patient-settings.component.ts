import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PatientserviceService } from 'src/app/Service/PatientService/patientservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient-settings',
  templateUrl: './patient-settings.component.html',
  styleUrls: ['./patient-settings.component.css']
})
export class PatientSettingsComponent implements OnInit  {

  userLogged: any;
  myValue: any;
  details: any = {};
  constructor(private apiService :PatientserviceService,private toastr: ToastrService,private router: Router) {
    this.myValue = this.apiService.getValue();

  console.log('----myValue',this.myValue);
  }

  ngOnInit() {
     
    this.getDta();

  }

  getDta(){
    const email =this.myValue.source._value;
    this.apiService.getDetails(email).subscribe((res)=>{ 
      
      this.details=res;
      console.log(this.details,"--------res");
      console.log(email,"--------data");
  },(err)=>{
    console.log(err,"-----------loginerror")
  })
  }

  onEdit(): void{
    this.apiService.updatePatient(this.details).subscribe(
      (response) => {
        console.log('Doctor updated successfully:', response);
        this.toastr.success('Patient updated successfully')
        
      },
      (error) => {
        console.error('Error updating doctor:', error);
        this.toastr.warning('Something went wrong!')

      }
    );
   
  }

  onDelete(){
    console.log('Doctor updated successfully:', this.details.pid);
    this.apiService.deletePatient(this.details.pid).subscribe(
      (response) => {

        Swal.fire({
          title: 'Are you sure want to delete?',
          text: 'You will not be able to retrive account!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, cancel it!',
          cancelButtonText: 'No, keep it'
        }).then((result) => {
          if (result.value) {
            Swal.fire(
              'Deleted!',
              'Account has been deleted.',
              'success'
            )
            
            const win: Window = window;
            win.location = "/home";
            
          } 
        })
        
      },
      (error) => {
        console.error('Error updating doctor:', error);
        this.toastr.warning('Something went wrong!')

      }
    );
   
  }

}