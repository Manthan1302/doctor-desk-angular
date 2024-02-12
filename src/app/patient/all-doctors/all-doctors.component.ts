import { Component } from '@angular/core';
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
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.service.getAllDoctors().subscribe((data)=>{
      this.doctors=data
    })  
  }
}
