import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomerIdService } from '../customer-id.service';

import { WavesModule, TableModule, IconsModule } from 'angular-bootstrap-md';

@Component({
  selector: 'app-cp-sales-order-page',
  templateUrl: './cp-sales-order-page.component.html',
  styleUrls: ['./cp-sales-order-page.component.css']
})
export class CpSalesOrderPageComponent implements OnInit {

  constructor(private customernumber : CustomerIdService,public router:Router, private http:HttpClient) { }

  baseUrl : string='http://localhost:3000/saleorder';

  Data: any;

  doctyp:any;

  salesdet:any;

  message:any;
  
  p : number=1;
  name:any;
  temp:any

  
  SD_DOC:any;
  headElements = ['SD_DOC', 'PLANT', 'CREATION_DATE', 'BASE_UOM'];
custnumber:any
searchtext:any;

  ngOnInit(): any {

    this.message = this.customernumber.getmessage()
    this.name = this.message[1]
    this.temp = localStorage.getItem('UserId')
    console.log(this.temp)
    this.message[0] = this.temp
    this.temp = localStorage.getItem('UserName')
    this.name = this.temp
    // this.customernumber=(this.message[1]);

    console.log(this.message + "san");
    return this.http.post(this.baseUrl, {

      customerno: this.message[0]

    }).subscribe(

      response => {

        console.log(response)

        this.Data = JSON.parse(JSON.stringify(response));

        this.salesdet = (this.Data.E_SALESORDER.item);


        console.log(this.salesdet);
      }

    )

  }
  search(){
    if(this.SD_DOC == "")
    {
      this.ngOnInit();
    }
    else{
      this.salesdet = this.salesdet.filter((res: { SD_DOC: string; }) =>{
        return res.SD_DOC.toLocaleLowerCase().match(this.SD_DOC.toLocaleLowerCase());
      })
    }
  }
  key : string='SD_DOC';
  reverse:boolean = false;
  sort(key: string)
  {
    this.key=key;
    this.reverse = !this.reverse;
  }

}
