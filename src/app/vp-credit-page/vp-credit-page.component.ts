import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorIdServiceService } from '../vendor-id-service.service';


@Component({
  selector: 'app-vp-credit-page',
  templateUrl: './vp-credit-page.component.html',
  styleUrls: ['./vp-credit-page.component.css']
})
export class VpCreditPageComponent implements OnInit {

  constructor(private vendorId: VendorIdServiceService, public router: Router, private http: HttpClient) { }

  message:any;
  baseUrl : string='http://localhost:3000/vendorCredit';
  Data:any;
  creditdet:any;
  itemdet:any;
  BELNR:any;
  searchtext:any;
  p : number=1;
  q : number=1;
  baseUrl1 : string='http://localhost:3000/vendorDebit';

  debitdet:any;
  name:any
  temp:any

  ngOnInit(): any {
    this.name = this.vendorId.getmessage2()
    this.temp = localStorage.getItem('UserId1')
    console.log(this.temp)
    this.message = this.temp
    this.temp = localStorage.getItem('UserName1')
    this.name = this.temp

    this.callCredit();
    this.callDebit();

   
  }

  callCredit(){
    this.message = this.vendorId.getmessage()
    this.temp = localStorage.getItem('UserId1')
    console.log(this.temp)
    this.message = this.temp

    return this.http.post(this.baseUrl, {

      customerno: this.message

    }).subscribe(

      response => {

        console.log(response)

        this.Data = JSON.parse(JSON.stringify(response));

        this.creditdet = (this.Data.IT_CREDIT.item);
        // this.debitdet = (this.Data.DEBIT.item);


        console.log(this.creditdet);
      }

    )

  }
  callDebit(){
    this.message = this.vendorId.getmessage()
    this.temp = localStorage.getItem('UserId1')
    console.log(this.temp)
    this.message = this.temp

    return this.http.post(this.baseUrl1, {

      customerno: this.message

    }).subscribe(

      response => {

        console.log(response)

        this.Data = JSON.parse(JSON.stringify(response));

        // this.creditdet = (this.Data.CREDIT.item);
        this.debitdet = (this.Data.IT_DEBIT.item);


        console.log(this.debitdet);
      }

    )

  }
  search(){
    if(this.BELNR == "")
    {
      this.ngOnInit();
    }
    else{
      this.creditdet = this.creditdet.filter((res: { BELNR: string; }) =>{
        return res.BELNR.toLocaleLowerCase().match(this.BELNR.toLocaleLowerCase());
      })
    }
  }
  key : string='BELNR';
  reverse:boolean = false;
  sort(key: string)
  {
    this.key=key;
    this.reverse = !this.reverse;
  }
  onCreditClick(item:any){
    console.log(item);
  }
}

