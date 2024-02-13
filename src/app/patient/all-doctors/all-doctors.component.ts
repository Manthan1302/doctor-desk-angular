import { Component, EventEmitter, Output } from '@angular/core';
import { CommonServiceService } from '../PatientService/common-service.service';
import { DoctorRegistration } from 'src/app/doctor/doctorModel/DoctorRegistrationModel';
import { Appointments } from 'src/app/sharedModel/Appointment';
import { BookAppointmentService } from 'src/app/sharedServices/bookAppointment.service';

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent {

  constructor(private service:CommonServiceService , 
    private appointmentService:BookAppointmentService){}
  doctors!:DoctorRegistration[];
  currentdoctordetails:DoctorRegistration | null = null
  bookingappointment:any
  doctoeName:string|null=null
  doctorId:number|null=null
  patientId:number|null=null


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.service.getAllDoctors().subscribe((data)=>{
      this.doctors=data
    
    })  
  }
  openmodal(data:DoctorRegistration){
    this.currentdoctordetails=data
    console.log(data);
    
  }
  bookappointment(data:DoctorRegistration){

    let patientSession=sessionStorage.getItem('loggedPatient')

    if(patientSession){
      let getPatientId=JSON.parse(patientSession)
      this.patientId=getPatientId.id
      console.log(this.patientId);
      
    }


    
    // this.bookingappointment=data
    this.doctoeName=data.doctorName
    this.doctorId=data.id
  }

  bookAppointmentFinal(form:Appointments){
    // console.log(form);
    
    form.doctorId=this.doctorId
    form.patientId=this.patientId
    form.appointmentStatus="Pending"
    // console.log(form);
    
    console.log(form);
      this.appointmentService.bookAddAppointment(form)

  }
}
