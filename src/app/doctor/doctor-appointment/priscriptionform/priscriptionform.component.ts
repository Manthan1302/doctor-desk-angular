import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Appointments } from 'src/app/sharedModel/Appointment';
import { DoctorRegistration } from '../../doctorModel/DoctorRegistrationModel';
import { PatientComponent } from './../../../patient/patient.component';
import { PatientRegistration } from 'src/app/patient/PatientModel/PatientRegistartionModel';
import { PatientLoginService } from './../../../patient/PatientService/patient-login.service';
import { Priscriptionmodel } from '../../doctorModel/Priscriptiondatamodel';

@Component({
  selector: 'app-priscriptionform',
  templateUrl: './priscriptionform.component.html',
  styleUrls: ['./priscriptionform.component.css']
})
export class PriscriptionformComponent implements OnInit {

  priscriptionform!:FormGroup
  DoctorData!:DoctorRegistration
  PatientData!:PatientRegistration
  priscriptionsubmitformdata!:Priscriptionmodel
  @Input()appointmentData!: Appointments;

  constructor(private PatientLoginService:PatientLoginService){}



  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this.priscriptionform = new FormGroup({
      doctorName:new FormControl(null),
      clinicName:new FormControl(null),
      clinicAddress:new FormControl(null),
      patientName:new FormControl(null),
      patientGender:new FormControl(null),
      patientPhone:new FormControl(null),
      patientDob:new FormControl(null),
      patientAge:new FormControl(null),
      Medicine:new FormArray([
      ]),
    })    
    const Doctordata = sessionStorage.getItem('LogedDoctor')
    console.log(Doctordata);
    if (Doctordata) {
      let doctordata = JSON.parse(Doctordata)
      this.DoctorData = doctordata 
    }
    

    


  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    let paitentid = this.appointmentData.patientId
    this.PatientLoginService.getallpatient().subscribe(result => {
      result.filter(e => {
        if(e.id === paitentid)
        {
          this.PatientData = e
          console.log(this.PatientData);
        }
      })
          
    this.priscriptionform.get('doctorName')?.setValue(this.DoctorData.doctorName)
    this.priscriptionform.get('clinicName')?.setValue(this.DoctorData.doctorClinicName)
    this.priscriptionform.get('clinicAddress')?.setValue(this.DoctorData.doctorClinicAddress)
    this.priscriptionform.get('patientName')?.setValue(this.PatientData.PatientName)
     this.priscriptionform.get('patientGender')?.setValue(this.PatientData.PatientGender)
    this.priscriptionform.get('patientPhone')?.setValue(this.PatientData.PatientPhoneNumber)
    this.priscriptionform.get('patientDob')?.setValue(this.PatientData.PatientDateOfBirth)
    this.priscriptionform.get('patientAge')?.setValue(this.getAge(this.PatientData.PatientDateOfBirth))
    })
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

  OnMedicineAddFunction(){
    const medicineformgroup = new FormGroup({
      medicineName  : new FormControl(null),
      medicineDosetime : new FormControl(null),
      medicineQuntity : new FormControl(null),
      medicineInstruction : new FormControl(null),
    });
    (<FormArray>this.priscriptionform.get('Medicine')).push(medicineformgroup)
  }
  OnMedicineDeleteFunction(index:number){
    const deletemedicinecomponent = <FormArray>this.priscriptionform.get('Medicine');
    deletemedicinecomponent.removeAt(index)
  }

  medicinecontrol(){
    return (this.priscriptionform.get('Medicine') as FormArray).controls
  }

  priscriptionsubmit(){
    this.priscriptionsubmitformdata = this.priscriptionform.value
    console.log( this.priscriptionform.value);
    
    console.log(this.priscriptionsubmitformdata);
    
  }





}
