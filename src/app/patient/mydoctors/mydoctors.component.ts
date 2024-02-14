import { Component } from '@angular/core';
import { PatientRegistration } from '../PatientModel/PatientRegistartionModel';
import { CommonServiceService } from '../PatientService/common-service.service';
import { Appointments } from 'src/app/sharedModel/Appointment';
import { DoctorRegistration } from 'src/app/doctor/doctorModel/DoctorRegistrationModel';
import { BookAppointmentService } from 'src/app/sharedServices/bookAppointment.service';

@Component({
  selector: 'app-mydoctors',
  templateUrl: './mydoctors.component.html',
  styleUrls: ['./mydoctors.component.css']
})
export class MydoctorsComponent {

  patient: PatientRegistration | null = null;
  myAppointment: Appointments[] = []
  constructor(private service: CommonServiceService,private appointmentService:BookAppointmentService) { }
  allDoctors: DoctorRegistration[] | null = null;
  myDoctors: DoctorRegistration[] = [];
  modelDoctor : DoctorRegistration | null= null
  doctorName:string|null= null;
  doctorId:number|null= null;
  patientId:number|null= null;


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const data = sessionStorage.getItem('loggedPatient');
    if (data)
      this.patient = JSON.parse(data);
    console.log(this.patient);


    this.service.getAllDoctors().subscribe((result) => {
      this.allDoctors = result;
      console.log(this.allDoctors);

    })


    this.service.getPatientAppointment().subscribe((data) => {
      data.filter(result => {
        if (result.patientId === this.patient?.id && result.appointmentStatus === "Complete") {
          this.allDoctors?.filter((e) => {
            if (result.doctorId === e.id) {
              if (!this.myDoctors.includes(e)) {
                this.myDoctors?.push(e)
              }
            }
          })
        }
      }
      )
    })
  }

  openModel(data:DoctorRegistration){
      this.modelDoctor= data
  }


  bookAppointmentFormModel(data:DoctorRegistration){
    this.doctorName= data.doctorName;
    this.doctorId= data.id;
  }

  bookAppointment(form:Appointments){
    form.doctorId=this.doctorId;
    form.appointmentStatus="Pending";
    form.patientId = this.patient!.id;

      this.appointmentService.bookAddAppointment(form);

  }
}
