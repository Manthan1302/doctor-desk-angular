import { Component, OnInit } from '@angular/core';
import { DoctorComonService } from './../DoctorServices/DoctorComon.service';
import { DoctorRegistration } from '../doctorModel/DoctorRegistrationModel';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit{
  constructor(private DoctorComonService:DoctorComonService){}
  doctordata!:DoctorRegistration

  

ngOnInit(): void {
  const Doctordata = sessionStorage.getItem('LogedDoctor')
    
    if(Doctordata){
      this.doctordata = JSON.parse(Doctordata)
      console.log(this.doctordata);
      
    }
    
}

}
