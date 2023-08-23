import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PatientserviceService } from 'src/app/Service/PatientService/patientservice.service';


@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent {
  usersData: any;
  inputData: any;

  loginForm: FormGroup
  submitted:boolean=false;
  dataSharingService: any;
  fieldTextType: boolean;
  repeatFieldTextType: boolean;

   constructor(private fb: FormBuilder, private route:ActivatedRoute,private router: Router,private apiService :PatientserviceService,private toastr: ToastrService){}

  ngOnInit(): void {
    this.loginForm=this.fb.group({
     email:[this.inputData,[Validators.required,Validators.email]],
     password :['',Validators.required]})
     //authguard purpose
    //  localStorage.setItem('SeesionUser',this.users)

    
 
   }

   toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleRepeatFieldTextType() {
    this.repeatFieldTextType = !this.repeatFieldTextType;
  }
 
   get formControls() {
    
    return this.loginForm.controls;
  }
 
  getDta(){
    const email = this.loginForm.value.email 
    this.apiService.getDetails(email).subscribe((res)=>{
      console.log(res,"--------res");
      console.log(email,"--------data");
  },(err)=>{
    console.log(err,"-----------loginerror")
  })
  }

  home() {
    const win: Window = window;
win.location = "/home";
   
  }

   onSubmit(){
    this.submitted = true
  //  if(this.loginForm.invalid){
  //   return;
  //  }
  
     const loginData =this.loginForm.value
     this.apiService.loginPatient(loginData).subscribe((res)=>{
         
      if(res.code===404){
        this.toastr.warning(res.msg);
       }else{
         this.toastr.success(res.msg);
          this.loginForm.reset();
          localStorage.setItem('SeesionUser',JSON.stringify(res))
          this.router.navigate(['/patient/dashboard']); 
        }
      
        
         console.log(res,"LoginResponse");
     },(err)=>{
       console.log(err,"loginerror")
     })
     this.usersData=this.loginForm.value.email;
    console.log(this.loginForm.value);
    console.log('----------------',this.usersData);
    const data = this.usersData;
    console.log('--------------send', data);
    
   
    this.apiService.setValue(data)
   
   }

 
}
