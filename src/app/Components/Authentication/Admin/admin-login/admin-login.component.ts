import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/Service/AdminService/adminservice.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {


  loginForm: FormGroup
  submitted:boolean=false;
  fieldTextType: boolean;
  repeatFieldTextType: boolean;


   constructor(private fb: FormBuilder,private router: Router,private apiService :AdminserviceService,private toastr: ToastrService){}

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
     this.apiService.postLoginData(loginData).subscribe((res)=>{
         

         if(res.code===404){
          this.toastr.warning(res.msg);
         }else{
          localStorage.setItem('SeesionAdmin',JSON.stringify(res))
          this.toastr.success(res.msg);
          this.loginForm.reset();
          this.router.navigate(['/admin']); 
        }
      
        
         console.log(res,"LoginResponse");
     },(err)=>{
       console.log(err,"loginerror")
     })
    console.log(this.loginForm.value);
   }
   home() {
    const win: Window = window;
win.location = "home";
   
  }
  }

  

