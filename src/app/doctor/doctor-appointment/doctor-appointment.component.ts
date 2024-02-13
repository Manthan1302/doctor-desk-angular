import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Appointments } from 'src/app/sharedModel/Appointment';
import { GetAppointments } from 'src/app/sharedServices/getAppointments.service';
import { ManageAppointmentService } from './../../sharedServices/manageAppointment.service';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css']
})
export class DoctorAppointmentComponent {

  @ViewChild('filter') status: ElementRef | null = null

  appointments: Appointments[] = []
  viewAppointments!: Appointments
  patientName: string | null = null

  constructor(private appointmentServices: GetAppointments,
    private manageAppointmentService: ManageAppointmentService,
    private http: HttpClient) { }


  ngOnInit(): void {
    const Doctordata = sessionStorage.getItem('LogedDoctor')
    console.log(Doctordata);


    if (Doctordata) {
      let doctordata = JSON.parse(Doctordata)
      let doctorId = doctordata.id
      this.appointmentServices.getMyAppointments().subscribe(result => {
        this.appointments = result.filter(e => {
          return e.doctorId === doctorId
        })
      })
    }
  }

  openmodalfunction(data: Appointments) {
    this.viewAppointments = data
    this.manageAppointmentService.getPatients().subscribe(result => {

      result.filter(res => {
        if (res.id === data.patientId) {
          this.patientName = res.PatientName
        }
      })
    })
  }

  StatusFilter() {
    console.log(this.status?.nativeElement.value);

    const Doctordata = sessionStorage.getItem('LogedDoctor')
    console.log(Doctordata);

    if (Doctordata) {
      let doctordata = JSON.parse(Doctordata)
      let doctorId = doctordata.id
      this.appointmentServices.getMyAppointments().subscribe(result => {
        this.appointments = result.filter(e => {
          if (this.status?.nativeElement.value === "All") {
            return this.appointmentServices.getMyAppointments()
          }

          else {
            return e.doctorId === doctorId && e.appointmentStatus === this.status?.nativeElement.value
          }
        })
      })
    }

  }

}