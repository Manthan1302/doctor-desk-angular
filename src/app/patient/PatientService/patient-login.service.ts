import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientRegistration } from '../PatientModel/PatientRegistartionModel';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PatientLoginService {

  userMatch: boolean = false;
  constructor(private httpClient: HttpClient, private router: Router) { }
  getPatient: string = "http://localhost:3000/allPatient"

  loginPatients(data: PatientRegistration) {
    this.httpClient.get<PatientRegistration[]>(this.getPatient).subscribe((result) => {
      result.forEach((e) => {
        console.log(e.PatientPhoneNumber);
        console.log(data.PatientPhoneNumber);
        console.log(e.PatientPassword);
        console.log(data.PatientPassword);
        console.log(e.PatientPhoneNumber === data.PatientPhoneNumber && e.PatientPassword === data.PatientPassword);
        
        if (e.PatientPhoneNumber === data.PatientPhoneNumber && e.PatientPassword === data.PatientPassword) {
        
          this.userMatch = true;
          console.log(this.userMatch);
          return;
        }
        // else {
        //   this.userMatch = false;
        //   console.log(this.userMatch);

        // }
      })
      console.log(this.userMatch);

      if (this.userMatch) {
        alert('success')
        // this.router.navigate(['/patientDashboard'])
      }
      else {
        alert("error")
      }
    })
  }
}
