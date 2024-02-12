import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorRegistration } from '../doctorModel/DoctorRegistrationModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorLoginService {
  constructor(private http: HttpClient) {}

  RegistrationApi = 'http://localhost:3000/allDoctors';

  checkLoginArray: DoctorRegistration[] = [];

  userMatch: boolean = false;

  LoginDoctor() {
    let doctorContactLogin = 8301949431;
    let password = '1111';

    this.http.get<DoctorRegistration[]>(this.RegistrationApi).subscribe((e) => {
      // console.log(e.forEach);
      e.forEach((e1) => {
        console.log(e1);
        console.log(e1.doctorPhoneNumber, e1.doctorRegisterPassword);
        console.log(
          e1.doctorPhoneNumber === doctorContactLogin &&
            e1.doctorRegisterPassword === password
        );
       

        if (
          e1.doctorPhoneNumber === doctorContactLogin &&
          e1.doctorRegisterPassword === password
        ) {
          this.userMatch = true;
          return;
        }
        console.log(this.userMatch);
      });

      console.log(this.userMatch);

      console.log(this.userMatch);
      if (this.userMatch) {
        console.log(this.userMatch);
        alert('user match');
      } else {
        console.log(this.userMatch);

        alert('invalid user');
      }
    });
    console.log(this.userMatch);
    
  }
}
