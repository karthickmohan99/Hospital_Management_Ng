import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PatientserviceService } from 'src/app/Service/PatientService/patientservice.service';


@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent {

  signupForm: FormGroup;
  submitted: boolean = false;
  fieldTextType: boolean;
  repeatFieldTextType: boolean;


  constructor(private fb: FormBuilder,private apiService :PatientserviceService,private router: Router,private toastr: ToastrService ) {}
  ngOnInit(): void {
   this.createForm();
  }

     toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleRepeatFieldTextType() {
    this.repeatFieldTextType = !this.repeatFieldTextType;
  }

  createForm() {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password :['',[
        Validators.required
      ]]
    });
  }


  get formControls() {
    return this.signupForm.controls;
  }

  home() {
    const win: Window = window;
win.location = "home";
   
  }
  
  onSubmit() {
    this.submitted = true;
    
    
    if (this.signupForm.invalid) {
      return;
    }
    const userData = this.signupForm.value;
   
    userData.phoneNumber = parseInt(userData.phoneNumber, 10);
    console.log(typeof(userData.phoneNumber),"mobileNumber");
    this.apiService.addPatient(userData).subscribe(
      response => {
        console.log(response,"posted Data");

        if(response.msg == "Email already exist"){
          this.toastr.warning(response.msg)  
        }else{
          if (response.code == 404) {
            this.toastr.warning(response.msg)
         }
         else{
        
            this.toastr.success("Successfully Registered")  
            this.router.navigate(['/patientlogin'])
            
            console.log('Registration successful', response);
           
         }
        }
       
      },
      error => {
        this.toastr.success(error.message)
        console.error('Registration failed', error);
      }
    );
}
  }

