import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Appointments } from 'src/app/sharedModel/Appointment';
import { GetAppointments } from 'src/app/sharedServices/getAppointments.service';
import { ManageAppointmentService } from './../../sharedServices/manageAppointment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css']
})
export class DoctorAppointmentComponent {

  modelStatus:string|null=null

  @ViewChild('filter') status: ElementRef | null = null
  @ViewChild('appointmentStatus') appointment!: ElementRef

  appointments: Appointments[] = []
  viewAppointments!: Appointments
  patientName: string | null = null
  appointmentId: number | null = null
  appointmentData!: Appointments;

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
          return e.doctorId === doctorId && e.appointmentStatus!="Complete"
        })
      })
    }

    // if(this.appointments.length===0){
    //   Swal.fire({
    //     icon:"info",
    //     text:"You don't have any Appointments"
    //   })
      
    // }
  }


  openmodalfunction(data: Appointments) {
    this.appointmentId = data.id
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

    if(this.appointments.length===0){
      
    }
    console.log(this.status?.nativeElement.value);

    const Doctordata = sessionStorage.getItem('LogedDoctor')
    console.log(Doctordata);

    if (Doctordata) {
      let doctordata = JSON.parse(Doctordata)
      let doctorId = doctordata.id

      this.appointmentServices.getMyAppointments().subscribe(result => {
        this.appointments = result.filter(e => {
          
          if (this.status?.nativeElement.value === "All" && e.appointmentStatus!="Complete") {
            return e.doctorId === doctorId
          }
          else {
            return e.doctorId === doctorId && e.appointmentStatus === this.status?.nativeElement.value && e.appointmentStatus!="Complete"
          }
        })
      })

    }
  }

  actionAppointment() {
    let status = this.appointment.nativeElement.value
    console.log(status);
    console.log(this.appointmentId);
    this.manageAppointmentService.actionAppointments(this.appointmentId, status).subscribe(res => {
      console.log(res);
      this.ngOnInit();
    })
  }

  openpriscriptionmodal(data:Appointments)
  {
    this.appointmentData = data;
  }


  deleteAppointment(id:number | null){
    this.manageAppointmentService.deleteAppointmentDoctor(id).subscribe();
    this.ngOnInit();
  }
}