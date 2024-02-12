import { Component, EventEmitter, Output } from '@angular/core';
import { CommonServiceService } from '../PatientService/common-service.service';
import { DoctorRegistration } from 'src/app/doctor/doctorModel/DoctorRegistrationModel';

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent {

  constructor(private service:CommonServiceService){}
  doctors!:DoctorRegistration[];
  currentdoctordetails:DoctorRegistration | null = null
  bookingappointment:any
  drName:string|null=null


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

    this.bookingappointment=data
    this.drName=data.doctorName
    
  }
}
