import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatientRegistration } from '../PatientModel/PatientRegistartionModel';
import { PatientRegistrationServiceService } from '../PatientService/patient-registration-service.service';
import { Appointments } from './../../sharedModel/Appointment';
import { BookAppointmentService } from 'src/app/sharedServices/bookAppointment.service';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent {
  constructor(private registrationService:PatientRegistrationServiceService,private Appointments:BookAppointmentService){}

  RegistrationPatient(form: PatientRegistration) {
    // console.log(form);
    this.registrationService.RegisterPatient(form).subscribe((result)=>{
      if(result){
        console.log("add");
      }
      else{
        console.log("error");
      }
    })
  }

  resetForm(form: NgForm) {
    form.reset()
  }
}
