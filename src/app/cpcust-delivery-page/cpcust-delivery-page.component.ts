import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomerIdService } from '../customer-id.service';

@Component({
  selector: 'app-cpcust-delivery-page',
  templateUrl: './cpcust-delivery-page.component.html',
  styleUrls: ['./cpcust-delivery-page.component.css']
})
export class CPCustDeliveryPageComponent implements OnInit {

  constructor(private customernumber : CustomerIdService,public router:Router, private http:HttpClient) { }


  baseUrl : string='http://localhost:3000/custdelivery';

  Data: any;

  doctyp:any;

  deliverydet:any;

  message:any;
  
  p : number=1;

  name:any;
  VBELN:any;
custnumber:any
searchtext:any;
temp:any;

  ngOnInit(): any {

    this.message = this.customernumber.getmessage()
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

        this.deliverydet = (this.Data.IT_DELIVERY.item);


        console.log(this.deliverydet);
      }

    )

  }
  search(){
    if(this.VBELN == "")
    {
      this.ngOnInit();
    }
    else{
      this.deliverydet = this.deliverydet.filter((res: { VBELN: string; }) =>{
        return res.VBELN.toLocaleLowerCase().match(this.VBELN.toLocaleLowerCase());
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

}
