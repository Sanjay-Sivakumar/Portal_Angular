import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomerIdService } from '../customer-id.service';

@Component({
  selector: 'app-cp-inquiry-page',
  templateUrl: './cp-inquiry-page.component.html',
  styleUrls: ['./cp-inquiry-page.component.css']
})
export class CpInquiryPageComponent implements OnInit {

  constructor(private customernumber:CustomerIdService,public router:Router, private http:HttpClient) { }

  baseUrl : string='http://localhost:3000/inquiry';

  Data: any;

  doctyp:any;

  Inqdet:any;

  message:any;
  
  p : number=1;

  KUNNR:any;
  custnumber:any
  name:any;
  searchtext:any;
  temp:any

  ngOnInit(): any {

    this.message = this.customernumber.getmessage()
    this.name = this.message[1]
    console.log(this.message[0])
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

        this.Inqdet = (this.Data.INQ_DET.item);

        
        console.log(this.Inqdet);
      }

    )

  }
  search(){
    if(this.KUNNR == "")
    {
      this.ngOnInit();
    }
    else{
      this.Inqdet = this.Inqdet.filter((res: { KUNNR: string; }) =>{
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
 
}
