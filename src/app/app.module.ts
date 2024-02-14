import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { AskingPageComponent } from './asking-page/asking-page.component';
import { RegistrationComponent } from './doctor/registration/registration.component';
import { LoginComponent } from './doctor/login/login.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { DashbordComponent } from './doctor/dashbord/dashbord.component';
import { DoctorViewapointmentComponent } from './doctor/doctor-viewapointment/doctor-viewapointment.component';
import { PatientRegistrationComponent } from './patient/patient-registration/patient-registration.component';
import { PatientLoginComponent } from './patient/patient-login/patient-login.component';
import { PatientDashboardComponent } from './patient/patient-dashboard/patient-dashboard.component';
import { DoctorProfileComponent } from './doctor/doctor-profile/doctor-profile.component';
import { DoctorAppointmentComponent } from './doctor/doctor-appointment/doctor-appointment.component';
import { HomeComponent } from './doctor/home/home.component';

import { AllDoctorsComponent } from './patient/all-doctors/all-doctors.component';
import { PatientProfileComponent } from './patient/patient-profile/patient-profile.component';
import { MyAppointmentComponent } from './patient/my-appointment/my-appointment.component';

import { MydoctorsComponent } from './patient/mydoctors/mydoctors.component';


@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    PatientComponent,
    AskingPageComponent,
    RegistrationComponent,
    LoginComponent,
    DashbordComponent,
    DoctorViewapointmentComponent,
    PatientRegistrationComponent,
    PatientLoginComponent,
    PatientDashboardComponent,
    DoctorProfileComponent,
    DoctorAppointmentComponent,
    HomeComponent,
    AllDoctorsComponent,
    PatientProfileComponent,
    MyAppointmentComponent,
    MydoctorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
