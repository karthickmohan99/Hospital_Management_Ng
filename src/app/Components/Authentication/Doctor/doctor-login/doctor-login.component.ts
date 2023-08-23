import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DoctorserviceService } from 'src/app/Service/DoctorService/doctorservice.service';


@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent {

  loginForm: FormGroup
  submitted:boolean=false;
  usersData: any;
  fieldTextType: boolean;
  repeatFieldTextType: boolean;

   constructor(private fb: FormBuilder,private router: Router,private apiService :DoctorserviceService,private toastr: ToastrService){}

  ngOnInit(): void {
    this.loginForm=this.fb.group({
     email:['',[Validators.required,Validators.email]],
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



   onSubmit(){
    this.submitted = true
  //  if(this.loginForm.invalid){
  //   return;
  //  }
     const loginData =this.loginForm.value
     this.apiService.loginDoctor(loginData).subscribe((res)=>{
         

        if(res.code===404){
          this.toastr.warning(res.msg);
         }else{
          localStorage.setItem('SeesionDoctor',JSON.stringify(res))
          this.router.navigate(['/doctor']); 
          this.toastr.success(res.msg);
          this.loginForm.reset();
          
        }
        
      
        
         console.log(res,"LoginResponse");
     },(err)=>{
       console.log(err,"loginerror")
     })
    console.log(this.loginForm.value);
    this.usersData=this.loginForm.value.email;
    console.log(this.loginForm.value);
    console.log('----------------',this.usersData);
    const data = this.usersData;
    console.log('--------------send', data);
    
   
    this.apiService.setValue(data)
   }

   home() {
    const win: Window = window;
win.location = "home";
   
  }

 
}
