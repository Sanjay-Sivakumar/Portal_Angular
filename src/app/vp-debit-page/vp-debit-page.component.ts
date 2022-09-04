import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorIdServiceService } from '../vendor-id-service.service';


@Component({
  selector: 'app-vp-debit-page',
  templateUrl: './vp-debit-page.component.html',
  styleUrls: ['./vp-debit-page.component.css']
})
export class VpDebitPageComponent implements OnInit {

  constructor(private vendorId: VendorIdServiceService, public router: Router, private http: HttpClient) { }
  message:any;
  baseUrl : string='http://localhost:3000/vendorDebit';
  Data:any;
  debitdet:any;
  itemdet:any;
  BELNR:any;
  p : number=1;
  ngOnInit(): any {

    this.message = this.vendorId.getmessage()

    return this.http.post(this.baseUrl, {

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
      this.debitdet = this.debitdet.filter((res: { BELNR: string; }) =>{
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

