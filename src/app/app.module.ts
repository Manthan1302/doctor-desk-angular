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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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


import { DoctorPatientsComponent } from './doctor/doctor-patients/doctor-patients.component';
import { CommonModule } from '@angular/common';

import { PriscriptionformComponent } from './doctor/doctor-appointment/priscriptionform/priscriptionform.component';
import { MydoctorsComponent } from './patient/mydoctors/mydoctors.component';
import { Error404Component } from './error404/error404.component';
import { PatientPriscriptionComponent } from './patient/patient-priscription/patient-priscription.component';
import { DownloadpriComponent } from './patient/patient-priscription/downloadpri/downloadpri.component';





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
    DoctorPatientsComponent,
    MydoctorsComponent,
    Error404Component,
    PriscriptionformComponent,
    PatientPriscriptionComponent,
    DownloadpriComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
