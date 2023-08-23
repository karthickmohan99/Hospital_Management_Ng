import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { PatientLoginComponent } from './Components/Authentication/Patient/patient-login/patient-login.component';
import { PatientRegisterComponent } from './Components/Authentication/Patient/patient-register/patient-register.component';
import { DoctorLoginComponent } from './Components/Authentication/Doctor/doctor-login/doctor-login.component';
import { DoctorRegisterComponent } from './Components/Authentication/Doctor/doctor-register/doctor-register.component';
import { AdminLoginComponent } from './Components/Authentication/Admin/admin-login/admin-login.component';
import { AdminRegisterComponent } from './Components/Authentication/Admin/admin-register/admin-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ErrorsComponent } from './Components/Errors/errors/errors.component';
import { authguardGuard } from './shared/authguard.guard';
import { PatientComponent } from './Components/Patient/patient/patient.component';

import { DashboardComponent } from './Components/Patient/dashboard/dashboard.component';
import { DoctorsComponent } from './Components/Patient/doctors/doctors.component';
import { AppointmentComponent } from './Components/Patient/appointment/appointment.component';
import { BookingsComponent } from './Components/Patient/bookings/bookings.component';
import { PatientSettingsComponent } from './Components/Patient/patient-settings/patient-settings.component';
import { HeaderComponent } from './Components/Shared/header/header.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { SidebarComponent } from './Components/Shared/sidebar/sidebar.component';
import { DoctorMainDComponent } from './Components/Doctor/doctor-main-d/doctor-main-d.component';
import { DoctorAppoitmentComponent } from './Components/Doctor/doctor-appoitment/doctor-appoitment.component';
import { DoctorSessionComponent } from './Components/Doctor/doctor-session/doctor-session.component';
import { PatientsComponent } from './Components/Doctor/patients/patients.component';
import { DoctorProfileComponent } from './Components/Doctor/doctor-profile/doctor-profile.component';
import { DoctorSidebarComponent } from './Components/Shared/Doctor/doctor-sidebar/doctor-sidebar.component';
import { DoctorHeaderComponent } from './Components/Shared/Doctor/doctor-header/doctor-header.component';
import { BooklistComponent } from './Components/Patient/booklist/booklist.component';
import { AdminSidebarComponent } from './Components/Shared/Shared-Components/sidebar/sidebar.component';
import { AdminAppointmentComponent } from './Components/Pages/appointment/appointment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { ScheculeComponent } from './Components/Pages/schecule/schecule.component';
import { AdminDoctorComponent } from './Components/Pages/doctor/doctor.component';
import { AdminPatientComponent } from './Components/Pages/patient/patient.component';
import { AdminDashboardComponent } from './Components/Pages/dashboard/dashboard.component';
import { AdminedSidebarComponent } from './Components/Shared/Admin/admined-sidebar/admined-sidebar.component';
import { AdminComponent } from './Components/Pages/admin/admin.component';
import { AdminedHeaderComponent } from './Components/Shared/admined-header/admined-header.component';
import { HomeHeaderComponent } from './Components/Shared/Home/home-header/home-header.component';
import { HomeMainHeaderComponent } from './Components/Shared/Home/home-main-header/home-main-header.component';
import { HomeFooterComponent } from './Components/Shared/Home/home-footer/home-footer.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatientLoginComponent,
    PatientRegisterComponent,
    DoctorLoginComponent,
    DoctorRegisterComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    ErrorsComponent,
    PatientComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    DoctorsComponent,
    AppointmentComponent,
    BookingsComponent,
    PatientSettingsComponent,
    DoctorMainDComponent,
    DoctorAppoitmentComponent,
    DoctorSessionComponent,
    PatientsComponent,
    DoctorProfileComponent,
    DoctorSidebarComponent,
    DoctorHeaderComponent,
    BooklistComponent,
    AdminSidebarComponent,
    AdminAppointmentComponent,
    ScheculeComponent,
    AdminDoctorComponent,
    AdminPatientComponent,
    AdminDashboardComponent,
    AdminedSidebarComponent,
    AdminComponent,
    AdminedHeaderComponent,
    HomeHeaderComponent,
    HomeMainHeaderComponent,
    HomeFooterComponent
   
   
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
     FormsModule,
     BrowserAnimationsModule,  
    ToastrModule.forRoot(),
    NgbModule,
 
   
    
     
  ],
  providers: [authguardGuard,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
