import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Home/home/home.component';
import { PatientLoginComponent } from './Components/Authentication/Patient/patient-login/patient-login.component';
import { PatientRegisterComponent } from './Components/Authentication/Patient/patient-register/patient-register.component';
import { DoctorLoginComponent } from './Components/Authentication/Doctor/doctor-login/doctor-login.component';
import { DoctorRegisterComponent } from './Components/Authentication/Doctor/doctor-register/doctor-register.component';
import { AdminLoginComponent } from './Components/Authentication/Admin/admin-login/admin-login.component';
import { AdminRegisterComponent } from './Components/Authentication/Admin/admin-register/admin-register.component';
import { authguardGuard } from './shared/authguard.guard';
import { PatientComponent } from './Components/Patient/patient/patient.component';
import { DoctorsComponent } from './Components/Patient/doctors/doctors.component';
import { AppointmentComponent } from './Components/Patient/appointment/appointment.component';
import { BookingsComponent } from './Components/Patient/bookings/bookings.component';
import { DashboardComponent } from './Components/Patient/dashboard/dashboard.component';
import { DoctorAppoitmentComponent } from './Components/Doctor/doctor-appoitment/doctor-appoitment.component';
import { DoctorSessionComponent } from './Components/Doctor/doctor-session/doctor-session.component';
import { PatientsComponent } from './Components/Doctor/patients/patients.component';
import { PatientSettingsComponent } from './Components/Patient/patient-settings/patient-settings.component';
import { DoctorProfileComponent } from './Components/Doctor/doctor-profile/doctor-profile.component';
import { DoctorDashboardComponent } from './Components/Doctor/doctor-dashboard/doctor-dashboard.component';
import { DoctorMainDComponent } from './Components/Doctor/doctor-main-d/doctor-main-d.component';
import { BooklistComponent } from './Components/Patient/booklist/booklist.component';
import { AdminComponent } from './Components/Pages/admin/admin.component';
import { AdminAppointmentComponent } from './Components/Pages/appointment/appointment.component';
import { AdminDoctorComponent } from './Components/Pages/doctor/doctor.component';
import { AdminPatientComponent } from './Components/Pages/patient/patient.component';
import { ScheculeComponent } from './Components/Pages/schecule/schecule.component';
import { AdminDashboardComponent } from './Components/Pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent,  },
  { path: 'patientlogin', component: PatientLoginComponent },
  { path: 'patientregister', component: PatientRegisterComponent },
  { path: 'doctorlogin', component: DoctorLoginComponent },
  { path: 'doctorregister', component: DoctorRegisterComponent },
  { path: 'adminlogin', component: AdminLoginComponent },
  { path: 'adminregister', component: AdminRegisterComponent },
  { path: 'patient', component: PatientComponent,canActivate:[authguardGuard],
  children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
    { path: 'doctors', component: DoctorsComponent },
    { path: 'appointment', component: AppointmentComponent},
   
      {path: 'bookings/:id', component: BookingsComponent }
    ,
    { path: 'dashboard', component: DashboardComponent },
   
    { path: 'mybooking', component: BooklistComponent },
    { path: 'profile', component: PatientSettingsComponent },
  ]},
  { path: 'doctor', component: DoctorMainDComponent,canActivate:[authguardGuard],
  children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
    { path: 'appointment', component: DoctorAppoitmentComponent },
    { path: 'session', component: DoctorSessionComponent },
    { path: 'patients', component: PatientsComponent },
    { path: 'dashboard', component: DoctorDashboardComponent },
    { path: 'profile', component: DoctorProfileComponent },
  ]},
  { 
    path: 'admin',  
    component: AdminComponent,
    canActivate:[authguardGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
      { path: 'doctor', component: AdminDoctorComponent },
      { path: 'patient', component: AdminPatientComponent },
      { path: 'schedule', component: ScheculeComponent },
      { path: 'dashboard', component: AdminDashboardComponent },
       { path: 'appointment', component: AdminAppointmentComponent }
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



