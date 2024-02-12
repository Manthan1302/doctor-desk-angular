import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatientLoginService } from '../PatientService/patient-login.service';
import { PatientRegistration } from '../PatientModel/PatientRegistartionModel';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent {

  constructor(private loginService:PatientLoginService){}
  LoginPatient(form:PatientRegistration){
    this.loginService.loginPatients(form)
  }
}
