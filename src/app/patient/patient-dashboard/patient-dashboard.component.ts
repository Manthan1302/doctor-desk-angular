import { Component } from '@angular/core';
import { PatientLoginService } from '../PatientService/patient-login.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent {

  constructor(private PatientService:PatientLoginService){}


  logout(){
    this.PatientService.logoutPatient();
  }
}
