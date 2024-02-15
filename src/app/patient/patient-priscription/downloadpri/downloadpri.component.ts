import { Component, Input } from '@angular/core';
import { Priscriptionmodel } from 'src/app/doctor/doctorModel/Priscriptiondatamodel';
import jsPDF from 'jspdf';
import html2canvas from "html2canvas";

@Component({
  selector: 'app-downloadpri',
  templateUrl: './downloadpri.component.html',
  styleUrls: ['./downloadpri.component.css']
})
export class DownloadpriComponent {
  
  @Input()item!:Priscriptionmodel

  downloadpriscriptionfunction(): void {
    var data = document.getElementById("downloadpriscription");
      html2canvas(data!).then(canvas => {
        // Few necessary setting options
        var imgWidth = 208;
        var pageHeight = 295;
        var imgHeight = (canvas.height * imgWidth) / canvas.width;
        var heightLeft = imgHeight;
  
        const contentDataURL = canvas.toDataURL("image/png");
        let pdf = new jsPDF("p", "mm", "a4"); // A4 size page of PDF
        var position = 0;
        pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
        pdf.save("MYPdf.pdf"); // Generated PDF
      });
  }

}
