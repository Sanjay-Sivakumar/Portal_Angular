import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorIdServiceService } from '../vendor-id-service.service';

@Component({
  selector: 'app-vp-invoice-list-page',
  templateUrl: './vp-invoice-list-page.component.html',
  styleUrls: ['./vp-invoice-list-page.component.css']
})
export class VpInvoiceListPageComponent implements OnInit {

  constructor(private vendorId: VendorIdServiceService, public router: Router, private http: HttpClient) { }
  baseUrl : string='http://localhost:3000/vinvoice';

  Data: any;

  doctyp:any;

  deliverydet:any;

  message:any;
  
  p : number=1;
  itemdet:any;
  
  VBELN:any;
custnumber:any
PO_NUMBER:any;
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

      this.deliverydet = (this.Data.INV_LIST.item);


      console.log(this.deliverydet);
    }

  )

}
search(){
  if(this.PO_NUMBER == "")
  {
    this.ngOnInit();
  }
  else{
    this.deliverydet = this.deliverydet.filter((res: { PO_NUMBER: string; }) =>{
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
onInvoiceClick(item:any){
 this.vendorId.setmessage1(item.BELNR)
  this.router.navigateByUrl('/vpinvoicedet');
}
}