import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorIdServiceService } from '../vendor-id-service.service';

@Component({
  selector: 'app-vp-payment-page',
  templateUrl: './vp-payment-page.component.html',
  styleUrls: ['./vp-payment-page.component.css']
})
export class VpPaymentPageComponent implements OnInit {

  constructor(private vendorId: VendorIdServiceService, public router: Router, private http: HttpClient) { }

  baseUrl: string = 'http://localhost:3000/vendorPayment';

  Data: any;

  doctyp: any;

  payagedet: any;

  message: any;
  paydet: String[] = [];

  p: number = 1;
  name:any;


  ALLOC_NMBR: any;
  searchtext:any;
  temp:any
  

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
    
    
    
    this.payagedet = (this.Data.T_OPEN.item);
    
    
    
    console.log(this.payagedet);
    
    
    
    
    
    
    }
    
    
    
    )
    
    
    
    }
    
  ageCalculate(d2:any){
   
    var date2 = new Date(d2);
    let currentDate = new Date();
   
    var Time = currentDate.getTime() - date2.getTime();
    var Days = Time / (1000 * 3600 * 24);
    console.log(Days); //Diference in Days.
    return Math.floor(Days);
    
    }
      
      
      
    search(){
      if(this.ALLOC_NMBR == "")
      {
        this.ngOnInit();
      }
      else{
        this.payagedet = this.payagedet.filter((res: { ALLOC_NMBR: string; }) =>{
          return res.ALLOC_NMBR.toLocaleLowerCase().match(this.ALLOC_NMBR.toLocaleLowerCase());
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
  
  
    today = new Date();
  
    livedate = this.today.toLocaleDateString();
  
   
  
   dd = String(this.today.getDate()).padStart(2, '0');
  
  mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
  
  yyyy = this.today.getFullYear();
  
  
  
  dateString = this.mm + '-' + this.dd + '-' + this.yyyy;
  }

