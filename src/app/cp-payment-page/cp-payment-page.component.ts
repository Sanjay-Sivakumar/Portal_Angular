import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CpCustPayService } from '../cp-cust-pay.service';
import { CustomerIdService } from '../customer-id.service';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-cp-payment-page',
  templateUrl: './cp-payment-page.component.html',
  styleUrls: ['./cp-payment-page.component.css']
})
export class CpPaymentPageComponent implements OnInit {

  constructor(private pay:CpCustPayService, private customernumber: CustomerIdService, public router: Router, private http: HttpClient) {}



  Data: any;

  doctyp: any;

  payDet: any;

  invdetails: any;
  message: any;
  netQuantity:any;
  netAmount:any;
  paidAmount:any;
  balanceAmount:any;
  agingData:any;

  baseUrl : string='http://localhost:3000/invoice1';


  custnumber: any

cord(data:any){
if(data === 'S')
{
  return "Credit";
}
else{
  return "Debit";
}
}
  ngOnInit(): any {

    this.payDet = this.pay.getmessage()

    console.log(this.payDet);
    var cid = this.payDet[0];
    var sid = this.payDet[1];

    return this.http.post(this.baseUrl, {

      customerno: cid,
      salesdoc: sid

    }).subscribe(

      response => {

        console.log(response)

        this.Data = JSON.parse(JSON.stringify(response));

        this.payDet = (this.Data.INV_DET.item);

        
        console.log(this.payDet);

          this.netAmount = parseInt(this.payDet[0].WRBTR)+parseInt(this.payDet[1].WRBTR);
          this.netQuantity = this.payDet[1].BUZEI;
          for(var i=0;i<this.payDet.length;i++)
          {
            if(this.payDet[i].SHKZG == 'H')
            {
              this.balanceAmount = this.payDet[i].WRBTR;
              var date2 = new Date(this.payDet[i].MADAT);
              let currentDate = new Date(); 
              var Time1 = currentDate.getTime() - date2.getTime();
              var Days1 = Time1 / ( 1000 * 3600 * 24);
              if(Math.floor(Days1)>0)
              {
                this.agingData = Math.floor(Days1);
              }
            }
            if(this.payDet[i].SHKZG == 'S')
            {
              this.paidAmount = this.payDet[i].WRBTR;
            }
          }
      
    
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
