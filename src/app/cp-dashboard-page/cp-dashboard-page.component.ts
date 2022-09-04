import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomerIdService } from '../customer-id.service';
import { delay, map,  tap } from "rxjs/operators";

@Component({
  selector: 'app-cp-dashboard-page',
  templateUrl: './cp-dashboard-page.component.html',
  styleUrls: ['./cp-dashboard-page.component.css']
})
export class CpDashboardPageComponent implements OnInit {

  constructor(private customernumber : CustomerIdService,public router:Router, private http:HttpClient) { }

  baseUrl : string='http://localhost:3000/creditdebitmemo';
  baseUrlinv : string='http://localhost:3000/invoice';
  baseUrlsal : string='http://localhost:3000/saleorder';
  baseUrldeliv : string='http://localhost:3000/custdelivery';
  baseUrlinq : string='http://localhost:3000/inquiry';
  Data: any;

  creditdet:any;
  debitdet:any;
  Invdet:any;
  salesdet:any;
  deliverydet:any;
  Inqdet:any;

  deliverno:any;
  creditno:any;
  debitno:any;
  salesno:any;
  invno:any;
  inqno:any;
  payno:number=8;
  name:any;
  

  message:any;
  
  p : number=1;

  KUNNR:any;
  custnumber:any
temp:any;
flag1=false;
flag2=false;
flag3=false;
flag4=false;
flag5=false;

public show:boolean = false;
  public hide:boolean = true;

  ngOnInit(): void {

    this.message = this.customernumber.getmessage()
    this.name=this.message[1]

 this.temp = localStorage.getItem('UserName')
    this.name = this.temp




    this.CallInv()
    this.CallDeli()
    
    this.CallSal()
    this.CallCredit()
    this.CallInq()
    
    
  }
  CallInv(){
    this.message = this.customernumber.getmessage()
    console.log(this.message[0])
    this.temp = localStorage.getItem('UserId')
    console.log(this.temp)
    this.message[0] = this.temp

    return this.http.post(this.baseUrlinv, {

      customerno: this.message[0]

    }).subscribe(

      response => {

        console.log(response)

        this.Data = JSON.parse(JSON.stringify(response));

        this.Invdet = (this.Data.INV_DET.item);

        this.invno=this.Invdet.length;
        console.log(this.Invdet);
        this.flag1=true;
        this.toggle()
      }

    )
  }
  CallInq(){

    this.message = this.customernumber.getmessage()
    console.log(this.message[0])
    this.temp = localStorage.getItem('UserId')
    console.log(this.temp)
    this.message[0] = this.temp

    return this.http.post(this.baseUrlinq, {

      customerno: this.message[0]

    }).subscribe(

      response => {

        console.log(response)

        this.Data = JSON.parse(JSON.stringify(response));

        this.Inqdet = (this.Data.INQ_DET.item);
        this.inqno=this.Inqdet.length;

        
        console.log(this.Inqdet);
        this.flag2=true;
        this.toggle()
      }

    )

  }
  CallDeli(){
    this.message = this.customernumber.getmessage()
    this.temp = localStorage.getItem('UserId')
    console.log(this.temp)
    this.message[0] = this.temp

    return this.http.post(this.baseUrldeliv, {

      customerno: this.message[0]

    }).subscribe(

      response => {

        console.log(response)

        this.Data = JSON.parse(JSON.stringify(response));

        this.deliverydet = (this.Data.IT_DELIVERY.item);
        this.deliverno=this.deliverydet.length;

        console.log(this.deliverydet);
        this.flag3=true;
        this.toggle()
      }

    )

  }
  CallSal(){
    this.message = this.customernumber.getmessage()
    this.temp = localStorage.getItem('UserId')
    console.log(this.temp)
    this.message[0] = this.temp

    // this.customernumber=(this.message[1]);

    console.log(this.message + "san");
    return this.http.post(this.baseUrlsal, {

      customerno: this.message[0]

    }).subscribe(

      response => {

        console.log(response)

        this.Data = JSON.parse(JSON.stringify(response));

        this.salesdet = (this.Data.E_SALESORDER.item);
        this.salesno=this.salesdet.length;
        console.log(this.salesdet);
        this.flag4=true;
        this.toggle()
      }

    )
  }
  CallCredit(){
    this.message = this.customernumber.getmessage()
    this.temp = localStorage.getItem('UserId')
    console.log(this.temp)
    this.message[0] = this.temp

    return this.http.post(this.baseUrl, {

      customerno: this.temp

    }).subscribe(

      response => {

        console.log(response)

        this.Data = JSON.parse(JSON.stringify(response));

        this.creditdet = (this.Data.IT_CRE.item);
        this.debitdet = (this.Data.IT_DEB.item);

        this.creditno=this.creditdet.length;
        this.debitno=this.debitdet.length;
        console.log(this.creditdet);
        this.flag5=true;
        this.toggle()
      }

    )
  }
  toggle() {

  //  if(this.flag1 === true && this.flag2 === true && this.flag3 === true && this.flag4 === true && this.flag5 === true)
  //  {
  //   this.show = !this.show;
  //   this.hide = !this.hide;
  //  }
   
  }
  logoutfn(){
    localStorage.clear()
    this.router.navigateByUrl('/loginPage');
  }

}
