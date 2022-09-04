import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorIdServiceService } from '../vendor-id-service.service';

@Component({
  selector: 'app-vp-goods-receipt-page',
  templateUrl: './vp-goods-receipt-page.component.html',
  styleUrls: ['./vp-goods-receipt-page.component.css']
})
export class VpGoodsReceiptPageComponent implements OnInit {

  constructor(private vendorId: VendorIdServiceService, public router: Router, private http: HttpClient) {}

message:any;
baseUrl : string='http://localhost:3000/vendorGoods';
Data:any;
deliverydet:any;
itemdet:any;
MAT_DOC:any;
p : number=1;
searchtext:any;
name:any;
temp:any;
  ngOnInit(): any {

    this.message = this.vendorId.getmessage()
    this.name = this.vendorId.getmessage2()
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

        this.deliverydet = (this.Data.T_GOODS_HEAD.item);
        this.itemdet = (this.Data.T_GOODS_VALUES.item);


        console.log(this.deliverydet);
      }

    )

  }
  search(){
    if(this.MAT_DOC == "")
    {
      this.ngOnInit();
    }
    else{
      this.deliverydet = this.deliverydet.filter((res: { MAT_DOC: string; }) =>{
        return res.MAT_DOC.toLocaleLowerCase().match(this.MAT_DOC.toLocaleLowerCase());
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
 


