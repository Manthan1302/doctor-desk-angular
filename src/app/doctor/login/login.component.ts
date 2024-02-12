import { Component, ElementRef, ViewChild } from '@angular/core';
import { DoctorLoginService } from '../DoctorServices/DoctorLogin.service';
import { DoctorRegistration } from '../doctorModel/DoctorRegistrationModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private doctorLoginService:DoctorLoginService){}


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   
    
  }
  DoctorLoginfunction(form:DoctorRegistration){
    // const Doctornumber= this.Doctornumber.nativeElement.value;
    // const Doctorpassword= this.Doctorpassword.nativeElement.value;
    this.doctorLoginService.LoginDoctor(form)
  }
}
