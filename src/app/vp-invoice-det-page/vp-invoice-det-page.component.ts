import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorIdServiceService } from '../vendor-id-service.service';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-vp-invoice-det-page',
  templateUrl: './vp-invoice-det-page.component.html',
  styleUrls: ['./vp-invoice-det-page.component.css']
})
export class VpInvoiceDetPAgeComponent implements OnInit {

  constructor(private vendorId: VendorIdServiceService, public router: Router, private http: HttpClient) { }



baseUrl : string='http://localhost:3000/invdet';

Data: any;

doctyp:any;

creditdet:any;
invdet1:any;
ItemArray:any[]=[];
temp:any[]=[];
Total:number=0;
message:any;

invoicedet:any;

BELNR:any;
custnumber:any



ngOnInit(): any {

  this.message = this.vendorId.getmessage1()

  return this.http.post(this.baseUrl, {

    invoiceno: this.message

  }).subscribe(

    response => {

      console.log(response)

      this.Data = JSON.parse(JSON.stringify(response));

      // this.creditdet = (this.Data.CREDIT.item);
      this.invdet1 = (this.Data.INV_DET.item);


      console.log(this.invdet1);
     
      if(this.invdet1.length === undefined)
      {
        this.ItemArray[0]=this.invdet1;
      }
      else{
        this.ItemArray=[...this.invdet1];
      }

      
this.ItemArray.map((value)=>{
this.Total = this.Total + parseInt(value.WRBTR); 
 })


    }

  )

}
public openPDF(): void {



  let DATA: any = document.getElementById('pdf');



  html2canvas(DATA).then((canvas) => {



    let fileWidth = 208;



    let fileHeight = (canvas.height * fileWidth) / canvas.width;



    const FILEURI = canvas.toDataURL('image/png');



    let PDF = new jsPDF('p', 'mm', 'a4');



    let position = 0;



    PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);



    PDF.save('angular-demo.pdf');



  });



}  

}


