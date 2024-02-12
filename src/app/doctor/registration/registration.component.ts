import { Component } from '@angular/core';
import { DoctorRegistration } from '../doctorModel/DoctorRegistrationModel';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  RegisterDoctor(data:DoctorRegistration){
    console.log(data);
    
  }
}
