import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeIdService } from '../employee-id.service';

@Component({
  selector: 'app-ep-payslip-pdf-pafe',
  templateUrl: './ep-payslip-pdf-pafe.component.html',
  styleUrls: ['./ep-payslip-pdf-pafe.component.css']
})
export class EpPayslipPdfPafeComponent implements OnInit {

  constructor(private empId: EmployeeIdService, public router: Router, private http: HttpClient) { }
  baseUrl : string='http://localhost:3000/epaydet';
  baseUrl1 : string='http://localhost:3000/epaypdf';

  Data: any;
  Data1:any;

  doctyp:any;

  payslipdet:any;

  message:any;
  
  p : number=1;
  searchText:any;
  
  VBELN:any;
custnumber:any
PO_NUMBER:any;
temp:any

  ngOnInit(): any {

    this.message = this.empId.getmessage()
    this.temp = localStorage.getItem('UserId2')
    console.log(this.temp)
    this.message = this.temp

    return this.http.post(this.baseUrl, {

      invoiceno: this.message

    }).subscribe(

      response => {

        console.log(response)

        this.Data = JSON.parse(JSON.stringify(response));

        this.payslipdet = (this.Data.PAYSLIP_DET.item);
      }

    )

  }
  search(){
    if(this.PO_NUMBER == "")
    {
      this.ngOnInit();
    }
    else{
      this.payslipdet = this.payslipdet.filter((res: { PO_NUMBER: string; }) =>{
        return res.PO_NUMBER.toLocaleLowerCase().match(this.PO_NUMBER.toLocaleLowerCase());
      })
    }
  }
  
  key : string='';
  reverse:boolean = false;
  sort(key: string)
  {
    this.key=key;
    this.reverse = !this.reverse;
  }
  PDFdownload(seqnum : number){

    this.message = this.empId.getmessage()

    return this.http.post(this.baseUrl1, {

      empId: this.message,

      seqnumber : seqnum

    }).subscribe(

      response => {

        console.log(response)

        this.Data1 = JSON.parse(JSON.stringify(response));

        const linkSource = `data:application/pdf;base64,${this.Data1.BASE64}`;
    const downloadLink = document.createElement("a");
    const fileName = "payslip.pdf";
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
      }

    )

  }
}
