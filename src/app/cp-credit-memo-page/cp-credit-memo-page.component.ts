import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomerIdService } from '../customer-id.service';
import {ThemePalette} from '@angular/material/core';


@Component({
  selector: 'app-cp-credit-memo-page',
  templateUrl: './cp-credit-memo-page.component.html',
  styleUrls: ['./cp-credit-memo-page.component.css']
})
export class CpCreditMemoPageComponent implements OnInit {

  constructor(private customernumber : CustomerIdService,public router:Router, private http:HttpClient) { }

  baseUrl : string='http://localhost:3000/creditdebitmemo';

  Data: any;

  doctyp:any;

  creditdet:any;
  debitdet:any;

  message:any;
  
  p : number=1;

  KUNNR:any;
  custnumber:any
  name:any;
  searchtext:any;
  temp:any

  public show:boolean = false;
  public hide:boolean = true;
  public buttonName:any = 'Go To Debit';
 
  toggle() {
    this.show = !this.show;
    this.hide = !this.hide;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Go To Credit";
    else
      this.buttonName = "Go To Debit";
  }

  ngOnInit(): any {

    this.message = this.customernumber.getmessage()
    this.name=this.message[1]
    this.temp = localStorage.getItem('UserName')
    this.name = this.temp

    this.message = this.customernumber.getmessage()
    this.temp = localStorage.getItem('UserId')
    console.log(this.temp)
    this.message[0] = this.temp

    return this.http.post(this.baseUrl, {

      customerno: this.message[0]

    }).subscribe(

      response => {

        console.log(response)

        this.Data = JSON.parse(JSON.stringify(response));

        this.creditdet = (this.Data.IT_CRE.item);
        this.debitdet = (this.Data.IT_DEB.item);


        console.log(this.creditdet);
      }

    )

  }
  search(){
    if(this.KUNNR == "")
    {
      this.ngOnInit();
    }
    else{
      this.creditdet = this.creditdet.filter((res: { KUNNR: string; }) =>{
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
  onCreditClick(item:any){
    console.log(item);
  }
}
