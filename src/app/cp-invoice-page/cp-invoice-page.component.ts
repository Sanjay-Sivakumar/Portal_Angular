import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';

import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  CustomerIdService
} from '../customer-id.service';
import {
  CpInvoiceDetailsService
} from '../cp-invoice-details.service';
import html2canvas from 'html2canvas';



import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-cp-invoice-page',
  templateUrl: './cp-invoice-page.component.html',
  styleUrls: ['./cp-invoice-page.component.css']
})
export class CpInvoicePageComponent implements OnInit {

  constructor(private invdet: CpInvoiceDetailsService, private customernumber: CustomerIdService, public router: Router, private http: HttpClient) {}



  Data: any;

  doctyp: any;

  invDet: any;

  invdetails: any;
  custid: any;
  custname: any;
  salesdocnum: any;
  accdocnum: any;
  acctyp: any;
  fiscalyear: any;
  cord: any;
  lineitemnum: any;
  currencytype: any;
  balsedate: any;
  lastduneddate: any;
  loccuramount: any;
  doccuramount: any;
  generalledgeamount: any;
  message: any;



  custnumber: any


  ngOnInit(): any {

    this.invDet = this.invdet.getmessage()

    console.log(this.invDet);

    this.custid = this.invDet.KUNNR;
    this.message = this.customernumber.getmessage()

    this.custname = this.message[1];
    this.salesdocnum = this.invDet.VBEL2;
    this.accdocnum = this.invDet.BELNR;
    this.acctyp = this.invDet.KOART;
    this.fiscalyear = this.invDet.GJAHR;
    this.cord = this.invDet.SHKZG;
    this.lineitemnum = this.invDet.BUZEI;
    this.currencytype = this.invDet.PSWSL;
    this.balsedate = this.invDet.ZFBDT;
    this.lastduneddate = this.invDet.MADAT;
    this.loccuramount = this.invDet.DMBTR;
    this.doccuramount = this.invDet.WRBTR;
    this.generalledgeamount = this.invDet.PSWBT;

    if (this.invDet.SHKZG === 'S') {
      this.cord = "Credit"
    } else if (this.invDet.SHKZG === 'H') {
      this.cord = "Debit"
    }

    if (this.invDet.KOART === 'A') {
      this.acctyp = "Assets"
    } else if (this.invDet.KOART === 'D') {
      this.acctyp = "Customers"
    } else if (this.invDet.KOART === 'K') {
      this.acctyp = "Vendors"
    } else if (this.invDet.KOART === 'M') {
      this.acctyp = "Material"
    } else if (this.invDet.KOART === 'S') {
      this.acctyp = "G/L accounts"
    }

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
