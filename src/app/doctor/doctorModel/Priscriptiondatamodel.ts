export class Priscriptionmodel{
    
    doctorName : string | null = null
    clinicName : string | null = null
    clinicAddress : string | null = null
    patientName : string | null = null
    patientGender : string | null = null
    patientPhone : number | null = null
    patientDob : Date | null = null
    patientAge : number | null = null
    Medicine: Medicine[]=[]

}

export class Medicine{

    medicineName : string | null = null
    medicineDosetime : string | null = null
    medicineQuntity : number | null = null
    medicineInstruction : string | null = null
} 
