import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorIdServiceService } from '../vendor-id-service.service';


@Component({
  selector: 'app-vp-purchase-order-page',
  templateUrl: './vp-purchase-order-page.component.html',
  styleUrls: ['./vp-purchase-order-page.component.css']
})
export class VpPurchaseOrderPageComponent implements OnInit {

  constructor(private vendorId: VendorIdServiceService, public router: Router, private http: HttpClient) {}

message:any;
baseUrl : string='http://localhost:3000/vendorPurchase';
Data:any;
salesdet:any;
itemdet:any;
SD_DOC:any;
p : number=1;
searchtext:any
name:any;
temp:any;
ngOnInit(): any {

  this.message = this.vendorId.getmessage();
  this.name = this.vendorId.getmessage2()
  console.log(this.message);
  this.temp = localStorage.getItem('UserId1')
  console.log(this.temp)
  this.message = this.temp
  this.temp = localStorage.getItem('UserName1')
  this.name = this.temp

 
  return this.http.post(this.baseUrl, {

    customerno: this.message

  }).subscribe(

    response => {

      console.log(response)

      this.Data = JSON.parse(JSON.stringify(response));

      this.salesdet = (this.Data.IT_HEADER.item);
      this.itemdet = (this.Data.IT_ITEM.item);

      console.log(this.salesdet,this.Data);
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



