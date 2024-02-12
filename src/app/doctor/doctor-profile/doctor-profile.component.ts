import { Component, OnInit } from '@angular/core';
import { DoctorComonService } from './../DoctorServices/DoctorComon.service';
import { DoctorRegistration } from '../doctorModel/DoctorRegistrationModel';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit{
  constructor(private doctorComonService:DoctorComonService){}
  doctordata!:DoctorRegistration

  

  updateName:string|null=null
  updateEmail:string|null=null
  updateMobile:number|null=null
  updateClinicName:string|null=null
  updateAddress:string|null=null

ngOnInit(): void {
  const Doctordata = sessionStorage.getItem('LogedDoctor')
  console.log(Doctordata);
  
    
    if(Doctordata){
      this.doctordata = JSON.parse(Doctordata)
      this.updateName=this.doctordata.doctorName
      this.updateEmail=this.doctordata.doctorEmail
      this.updateMobile=this.doctordata.doctorPhoneNumber
      this.updateClinicName=this.doctordata.doctorClinicName
      this.updateAddress=this.doctordata.doctorClinicAddress
      console.log(this.doctordata);
      
    }


    
}

updateData(formVal:any){
  console.log(formVal);
  
  this.doctorComonService.updateDoctor(formVal).subscribe(result=>{
    console.log(result);
    sessionStorage.setItem('LogedDoctor',JSON.stringify(result))
    this.ngOnInit()

    
  })
  
}

}
