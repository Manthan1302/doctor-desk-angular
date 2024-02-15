import { Component } from '@angular/core';
import { PatientRegistration } from 'src/app/patient/PatientModel/PatientRegistartionModel';
import { ManageAppointmentService } from './../../sharedServices/manageAppointment.service';
import { DoctorComonService } from './../DoctorServices/DoctorComon.service';
import { Appointments } from 'src/app/sharedModel/Appointment';

@Component({
  selector: 'app-doctor-patients',
  templateUrl: './doctor-patients.component.html',
  styleUrls: ['./doctor-patients.component.css'],
})
export class DoctorPatientsComponent {
  constructor(
    private manageAppointmentService: ManageAppointmentService,
    private doctorComonService: DoctorComonService
  ) {}

  myPatients: PatientRegistration[] = [];
  appointmentMy:Appointments[]=[]
  myPatientDetail!:PatientRegistration

  ngOnInit(): void {
    let drId = this.doctorComonService.getSessionStorage();
    this.manageAppointmentService.getAppointmentDoctor().subscribe((res) => {
      this.appointmentMy=res.filter(e=>{
        return e.doctorId === drId && e.appointmentStatus === 'Complete'
      })
    });
    this.getData();
  
  }

  getData(){

    this.myPatients =[]
    this.manageAppointmentService.getPatients().subscribe(result=>{
      this.appointmentMy.filter(e=>{
        result.filter(e1=>{
          if(e.patientId===e1.id){
            console.log(e);
            if(!this.myPatients.includes(e1))
            this.myPatients.push(e1) 
          }
        })
      })
  
    })
  }

  openModelPatientDetails(patient:PatientRegistration){
    this.myPatientDetail=patient
  }

  deletePatient(id:number | null){
    this.manageAppointmentService.deletePatientDoctor(id).subscribe();
    this.ngOnInit();
  }
}
