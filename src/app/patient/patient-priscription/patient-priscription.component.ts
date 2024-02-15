import { Component, OnInit } from '@angular/core';
import { Priscriptionmodel } from 'src/app/doctor/doctorModel/Priscriptiondatamodel';
import { Priscriptionservice } from 'src/app/sharedServices/priscription.service';
import { PatientRegistration } from '../PatientModel/PatientRegistartionModel';

@Component({
  selector: 'app-patient-priscription',
  templateUrl: './patient-priscription.component.html',
  styleUrls: ['./patient-priscription.component.css']
})
export class PatientPriscriptionComponent implements OnInit{

  Priscriptiondata:Priscriptionmodel[]=[]
  paietntdatafinal!:PatientRegistration
  paitentid:number | null = null
  finalpaitentPriscription!:Priscriptionmodel
  downloadpriscription!:Priscriptionmodel
  constructor(private priscriptionservice:Priscriptionservice){}
  

  ngOnInit(): void {

    const Paitentdata = sessionStorage.getItem('loggedPatient')
    // console.log(Doctordata);
    if (Paitentdata) {
       this.paietntdatafinal = JSON.parse(Paitentdata)
    }
    this.paitentid = this.paietntdatafinal.id
    this.priscriptionservice.getPriscription().subscribe(e=>{
      e.filter(res=>{
        if(res.patientId === this.paitentid)
        {
          this.finalpaitentPriscription = res
          this.Priscriptiondata.push(this.finalpaitentPriscription)
        }
      })
    })

  }
  viewprisciptionmodal(data:Priscriptionmodel){
    this.downloadpriscription = data
  }
}
