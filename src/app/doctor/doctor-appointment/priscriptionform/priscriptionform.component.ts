import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Appointments } from 'src/app/sharedModel/Appointment';
import { DoctorRegistration } from '../../doctorModel/DoctorRegistrationModel';
import { PatientComponent } from './../../../patient/patient.component';
import { PatientRegistration } from 'src/app/patient/PatientModel/PatientRegistartionModel';
import { PatientLoginService } from './../../../patient/PatientService/patient-login.service';
import { Medicine, MedicineApi, Priscriptionmodel } from '../../doctorModel/Priscriptiondatamodel';
import { Priscriptionservice } from './../../../sharedServices/priscription.service';
import { GetAppointments } from 'src/app/sharedServices/getAppointments.service';
import { ManageAppointmentService } from 'src/app/sharedServices/manageAppointment.service';
import { Router } from '@angular/router';
import { DoctorAppointmentComponent } from '../doctor-appointment.component';
import { DoctorComonService } from './../../DoctorServices/DoctorComon.service';


@Component({
  selector: 'app-priscriptionform',
  templateUrl: './priscriptionform.component.html',
  styleUrls: ['./priscriptionform.component.css']
})
export class PriscriptionformComponent implements OnInit,OnDestroy {

  priscriptionform!:FormGroup
  DoctorData!:DoctorRegistration
  PatientData!:PatientRegistration
  priscriptionsubmitformdata!:Priscriptionmodel
  paitentid:number |  null = null
  doctorid:number | null = null
  medicines:MedicineApi[]=[
    // {id:1,MedicineName:'an'},
    // {id:2,MedicineName:'abc'}
  ]

  @Input()appointmentData!: Appointments;

  constructor(private PatientLoginService:PatientLoginService,private Priscriptionservice:Priscriptionservice,private appointmentServices: GetAppointments,
    private manageAppointmentService: ManageAppointmentService,
    private router:Router,private doctorapp:DoctorAppointmentComponent,
    private doctorComonService:DoctorComonService
    
    ){}



  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    // this.medicineName.push({medicineName:"dolo"})
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
    // this.paitentid = this.appointmentData.patientId
    this.PatientLoginService.getallpatient().subscribe(result => {
      result.filter(e => {
        if(e.id === this.appointmentData.patientId!)
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

  
  valuechange(){
    // console.log("Sd");
    this.doctorComonService.getMedicines().subscribe((e)=>{
      console.log(e);
      this.medicines=e;
      console.log(this.medicines);
      
      
    })
    
    // console.log(this.medicineNameInput);
    //  this.doctorComonService.getMedicines().subscribe((e)=>{
       
    //   console.log(e);
    //   this.medicineName.push({id:e.id,MedicineName:e.MedicineName})
    //   console.log(e.MedicineName);
      
      // this.medicineName.push(e)
      // console.log(e[0].MedicineName);
      
      // this.medicineName.forEach(e=>{
      //   console.log(e.id);
        
        
      // })
      // console.log(this.medicineName);
      
    // this.medicineName.forEach((m)=>{
    //   console.log(m.MedicineName);
      
    // })  
      
    //  });
    
    
    // this.doctorComonService.getMedicines().subscribe(res=>{
    //   console.log(res);
    //   this.medicineName=res.filter(e=>{
    //     console.log(e);
    //     console.log(e.MedicineName);
        
        
    //     return e.MedicineName===this.medicineNameInput
    //   })
      
    //   // this.medicineName=res
    // // res.forEach(e=>{
    // //   console.log(e.MedicineName);
      
    // // })      
        
    //   })
      
  
      // console.log(this.medicineName);
      
      
      
    
    // console.log(this.medicineName)
    

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
    this.Priscriptionservice.createPriscription(this.priscriptionsubmitformdata,this.paitentid!,this.DoctorData.id!,this.appointmentData.appointmentDate!,this.appointmentData.appointmentTime!).subscribe(res=>{
      console.log(res);
      
    })
    const abc =  this.priscriptionform.get('Medicine')?.value;

    
    const deletemedicinecomponent = <FormArray>this.priscriptionform.get('Medicine');
    this.actionAppointment();
    
  }
  
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
  actionAppointment() {
    let status = 'Complete'
    // console.log(status);
    // console.log(this.appointmentId);
    this.manageAppointmentService.actionAppointments(this.appointmentData.id, status).subscribe(res => {
      console.log(res);

      // this.ngOnInit();
      this.doctorapp.ngOnInitcall();
    })
    // this.router.navigate(['doctordashbord/appointment'])
  }






}
