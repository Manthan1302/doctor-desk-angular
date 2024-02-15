
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { AppComponent } from './app.component';
import { AskingPageComponent } from './asking-page/asking-page.component';
import { RegistrationComponent } from './doctor/registration/registration.component';
import { LoginComponent } from './doctor/login/login.component';
import { DashbordComponent } from './doctor/dashbord/dashbord.component';
import { DoctorViewapointmentComponent } from './doctor/doctor-viewapointment/doctor-viewapointment.component';
import { PatientLoginComponent } from './patient/patient-login/patient-login.component';
import { PatientDashboardComponent } from './patient/patient-dashboard/patient-dashboard.component';
import { PatientRegistrationComponent } from './patient/patient-registration/patient-registration.component';
import { DoctorProfileComponent } from './doctor/doctor-profile/doctor-profile.component';

import { PatientProfileComponent } from './patient/patient-profile/patient-profile.component';
import { AllDoctorsComponent } from './patient/all-doctors/all-doctors.component';
import { HomeComponent } from './doctor/home/home.component';
import { DoctorAppointmentComponent } from './doctor/doctor-appointment/doctor-appointment.component';
import { MyAppointmentComponent } from './patient/my-appointment/my-appointment.component';
import { DoctorPatientsComponent } from './doctor/doctor-patients/doctor-patients.component';
import { MydoctorsComponent } from './patient/mydoctors/mydoctors.component';
import { DoctorAccessAuthGuard } from './doctor/AuthGuard/doctor-access-auth.guard';
import { RegLogAuthGuard  } from './doctor/AuthGuard/reg-log-auth.guard';
import { LogRegAuthGuard  } from './patient/AuthGuard/log-reg-auth.guard';
import { PatientAccessAuthGuard } from './patient/AuthGuard/patient-access-auth.guard';
import { Error404Component } from './error404/error404.component';



const routes: Routes = [
  { path: "", component: AskingPageComponent },
  // doctor  routes
  { path: "doctorregistration", component: RegistrationComponent ,canActivate:[RegLogAuthGuard]},
  { path: "doctorlogin", component: LoginComponent,canActivate:[RegLogAuthGuard]},
  {
    path: "doctordashbord", component: DashbordComponent,canActivate:[DoctorAccessAuthGuard],
    children: [
      { path: "", component: HomeComponent },
      { path: "appointment", component:DoctorAppointmentComponent },
      { path: "profile", component: DoctorProfileComponent },
      { path: "doctorPatients", component: DoctorPatientsComponent },
    ]
  },
  // patient routes
  { path: "patientRegistration", component: PatientRegistrationComponent ,canActivate:[LogRegAuthGuard]},
  { path: "patientLogin", component: PatientLoginComponent ,canActivate:[LogRegAuthGuard]},
  { path: "patientDashboard", component: PatientDashboardComponent ,canActivate:[PatientAccessAuthGuard],children:[
    {path:"PatientProfile",component:PatientProfileComponent},
    {path:"AllDoctors",component:AllDoctorsComponent},
    {path:"myAppointment",component:MyAppointmentComponent},
    {path:"myDoctors",component:MydoctorsComponent},

  ]},
  {path:"**",component:Error404Component}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
