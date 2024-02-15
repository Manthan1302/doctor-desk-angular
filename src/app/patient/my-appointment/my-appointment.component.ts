import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('filter') status: ElementRef | null = null
  @ViewChild('appointmentStatus') appointment!: ElementRef
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

  StatusFilter() {
    console.log(this.status?.nativeElement.value);

    const patientData = sessionStorage.getItem('loggedPatient')
    console.log(patientData);

    if (patientData) {
      let data = JSON.parse(patientData)
      let patientId = data.id

      this.service.getPatientAppointment().subscribe(result => {
        this.myAppointments= result.filter(e => {
          
          if (this.status?.nativeElement.value === "All") {
            return e.patientId === patientId
          }
          else {
            return e.patientId === patientId && e.appointmentStatus === this.status?.nativeElement.value
          }
        })
      })

    }
  }

  deleteAppointment(id:number | null){
    this.service.deleteAppointment(id!).subscribe();
    this.ngOnInit()
  }

}
