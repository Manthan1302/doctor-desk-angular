import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorRegistration } from '../doctorModel/DoctorRegistrationModel';
import { Observable } from 'rxjs';
import { RouteConfigLoadStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DoctorLoginService {
  constructor(private http: HttpClient,
    private router:Router) {}

  RegistrationApi = 'http://localhost:3000/allDoctors';

  checkLoginArray: DoctorRegistration[] = [];
  LogedUser!: DoctorRegistration;


  userMatch: boolean = false;

  LoginDoctor(data:DoctorRegistration) {


    this.http.get<DoctorRegistration[]>(this.RegistrationApi).subscribe((e) => {
        // console.log(Doctornumber,Doctorpassword);
        
      // console.log(e.forEach);
      e.forEach((e1) => {
        // console.log(e1);
        // console.log(e1.doctorPhoneNumber, Number(e1.doctorRegisterPassword));
        // console.log(
        //   e1.doctorPhoneNumber === data.doctorPhoneNumber &&
        //     e1.doctorRegisterPassword === data.doctorRegisterPassword
        // );
       

        if (
          e1.doctorPhoneNumber === data.doctorPhoneNumber &&
          e1.doctorRegisterPassword === data.doctorRegisterPassword
        ) {
          this.LogedUser = e1
          this.userMatch = true;
          return;
        }else{
            this.userMatch=false
        }
        // console.log(this.userMatch);
      });

    //   console.log(this.userMatch);

      console.log(this.userMatch);
      if (this.userMatch) {
        console.log(this.userMatch);
        sessionStorage.setItem('LogedDoctor',JSON.stringify(this.LogedUser))
        this.router.navigate(['doctordashbord'])
      } else {
        console.log(this.userMatch);

        alert('invalid user');
      }
    });
    // console.log(this.userMatch);
    
  }
}
