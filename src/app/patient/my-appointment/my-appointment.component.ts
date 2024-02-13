import { Component } from '@angular/core';
import { CommonServiceService } from '../PatientService/common-service.service';
import { Appointments } from 'src/app/sharedModel/Appointment';
import { PatientRegistration } from '../PatientModel/PatientRegistartionModel';

@Component({
  selector: 'app-my-appointment',
  templateUrl: './my-appointment.component.html',
  styleUrls: ['./my-appointment.component.css']
})
export class MyAppointmentComponent {
  myAppointments: Appointments[] = []
  id: PatientRegistration | null = null;
  constructor(private service: CommonServiceService) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const data = sessionStorage.getItem('loggedPatient')
    console.log(data);

    if (data) {
      this.id = JSON.parse(data)
    }
    this.service.getPatientAppointment().subscribe((result) => {
      this.myAppointments = result.filter(e => {
        return e.patientId === this.id?.id
      })
    })
  }
}
