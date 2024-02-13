import { Component } from '@angular/core';
import { PatientRegistration } from '../PatientModel/PatientRegistartionModel';
import { CommonServiceService } from '../PatientService/common-service.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent {

  showEditForm:boolean = false
  loggedInPatient!: PatientRegistration;
  PatientName!:string | null;
  PatientEmail!:string | null;
  PatientPhoneNumber!:number | null;
  PatientDateOfBirth!:string | null;
  PatientAddress!:string | null;
  PatientCity!:string | null;
  PatientState!:string | null;
  PatientPinCode!:string | null;
  PatientPassword!:string | null;


  age: number = 0;
  id:number=0;
 
  constructor(private service:CommonServiceService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const data = sessionStorage.getItem('loggedPatient')
    this.loggedInPatient = JSON.parse(data!);
    console.log(this.loggedInPatient.PatientDateOfBirth);
    
    this.age = this.getAge(this.loggedInPatient.PatientDateOfBirth)
    this.PatientName = this.loggedInPatient.PatientName;
    this.PatientEmail = this.loggedInPatient.PatientEmail;
    this.PatientPhoneNumber = this.loggedInPatient.PatientPhoneNumber;
    this.PatientDateOfBirth = this.loggedInPatient.PatientDateOfBirth;
    this.PatientAddress = this.loggedInPatient.PatientAddress;
    this.PatientCity = this.loggedInPatient.PatientCity;
    this.PatientState = this.loggedInPatient.PatientState;
    this.PatientPinCode = this.loggedInPatient.PatientPinCode;
    this.PatientPassword = this.loggedInPatient.PatientPassword;
    
  }

  getAge(dateString: any) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age
  }

  updatePatient(data:PatientRegistration){
    this.service.updatePatientProfile(data).subscribe((result)=>{
      console.log(result);
      
      sessionStorage.setItem('loggedPatient',JSON.stringify(result))
      this.ngOnInit()
    })
  }
}
