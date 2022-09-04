import { Component, OnInit } from '@angular/core';
import { CpInvoiceDetailsService } from '../cp-invoice-details.service';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomerIdService } from '../customer-id.service';

@Component({
  selector: 'app-cp-inovice-table-page',
  templateUrl: './cp-inovice-table-page.component.html',
  styleUrls: ['./cp-inovice-table-page.component.css']
})
export class CpInoviceTablePageComponent implements OnInit {

  constructor(private customernumber:CustomerIdService, private InvoiceDet:CpInvoiceDetailsService,public router:Router, private http:HttpClient) { }

  baseUrl : string='http://localhost:3000/invoice';

  Data: any;

  doctyp:any;

  Invdet:any;
  searchtext:any;

  message:any;
  
  p : number=1;
  name:any;

  KUNNR:any;
  temp:any
  custnumber:any

  ngOnInit(): any {

    this.message = this.customernumber.getmessage()
    console.log(this.message[0])
    this.name = this.message[1]
    this.temp = localStorage.getItem('UserId')
    console.log(this.temp)
    this.message[0] = this.temp

    this.temp = localStorage.getItem('UserName')
    this.name = this.temp

    return this.http.post(this.baseUrl, {

      customerno: this.message[0]

    }).subscribe(

      response => {

        console.log(response)

        this.Data = JSON.parse(JSON.stringify(response));

        this.Invdet = (this.Data.INV_DET.item);

        
        console.log(this.Invdet);
      }

    )

  }
  search(){
    if(this.KUNNR == "")
    {
      this.ngOnInit();
    }
    else{
      this.Invdet = this.Invdet.filter((res: { KUNNR: string; }) =>{
        return res.KUNNR.toLocaleLowerCase().match(this.KUNNR.toLocaleLowerCase());
      })
    }
  }
  key : string='KUNNR';
  reverse:boolean = false;
  sort(key: string)
  {
    this.key=key;
    this.reverse = !this.reverse;
  }
  onInvoiceClick(item:any){
    this.InvoiceDet.setmessage(item)
    console.log(item);
    this.router.navigateByUrl('/invoice');
  }

}
