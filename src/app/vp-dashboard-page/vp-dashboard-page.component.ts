import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorIdServiceService } from '../vendor-id-service.service';

@Component({
  selector: 'app-vp-dashboard-page',
  templateUrl: './vp-dashboard-page.component.html',
  styleUrls: ['./vp-dashboard-page.component.css']
})
export class VpDashboardPageComponent implements OnInit {

  constructor(private vendorId:VendorIdServiceService,private http:HttpClient,private router:Router){}
  baseUrl : string='http://localhost:3000/vprofile';
  baseUrlcredit : string='http://localhost:3000/vendorCredit';
  baseUrldebit : string='http://localhost:3000/vendorDebit';
  baseUrlinvoice : string='http://localhost:3000/vinvoice';
  baseUrlgr : string='http://localhost:3000/vendorGoods';
  baseUrlpo : string='http://localhost:3000/vendorPurchase';
  baseUrlpay : string='http://localhost:3000/vendorPayment';
  baseUrlrfq : string='http://localhost:3000/rfq';
  Data: any;

  creditdet:any;
  debitdet:any;
  Invdet:any;
  grdet1:any;
  grdet2:any;
  podet1:any;
  podet2:any;
  paymentdet:any;
  rfqdet1:any
  rfqdet2:any;

  
  creditno:any;
  debitno:any;
  payno:any;
  invno:any;
  pono:any;
  grno:any;
  rfqno:any;
 
  name:any;
  profiledet:any;
  

  message:any;

  temp:any;
flag1=false;
flag2=false;
flag3=false;
flag4=false;
flag5=false;
flag6=false;
flag7=false;
flag8=false;

public show:boolean = true;
  public hide:boolean = false;
  


  ngOnInit(): void {

    this.temp = localStorage.getItem('UserName1')
    this.name = this.temp
    this.temp = localStorage.getItem('UserId1')
    console.log(this.temp)
    this.message = this.temp
if(this.message !== '5'){
    this.callCredit()
    this.callDebit()
    this.callpay()
    this.callinv()
    this.callpo()
    this.callgoodreceipt()
  
    this.callProfile()
    console.log("SANJAY")
}
this.callrfq()
this.toggle()
    
  }
  callProfile(){
    this.message = this.vendorId.getmessage()
    console.log(this.message)
    this.temp = localStorage.getItem('UserId1')
    console.log(this.temp)
    this.message = this.temp

    return this.http.post(this.baseUrl, {

      customerno: this.message

    }).subscribe(

      response => {

        console.log(response)

        this.Data = JSON.parse(JSON.stringify(response));
        this.profiledet = this.Data.VEND_PROFILE
        this.name = this.profiledet.FNAME
        this.vendorId.setmessage2(this.name)
        this.temp = localStorage.getItem('UserId1')
        console.log(this.temp)
        this.message = this.temp
       if(this.message !== '5')
       {
        this.flag1=true;
        this.toggle();
       }
       
       
    
      }

    )

  }
  callCredit(){
    this.message = this.vendorId.getmessage()
    this.temp = localStorage.getItem('UserId1')
    console.log(this.temp)
    this.message = this.temp

    return this.http.post(this.baseUrlcredit, {

      customerno: this.message

    }).subscribe(

      response => {

        console.log(response)

        this.Data = JSON.parse(JSON.stringify(response));

        this.creditdet = (this.Data.IT_CREDIT.item);
        // this.debitdet = (this.Data.DEBIT.item);


        console.log(this.creditdet);
        this.creditno=this.creditdet.length;
      
        this.temp = localStorage.getItem('UserId1')
        console.log(this.temp)
        this.message = this.temp
       if(this.message !== '5')
       {
        this.flag2=true;
        this.toggle();
       }
      }

    )

  }
  callDebit(){
    this.message = this.vendorId.getmessage()
    this.temp = localStorage.getItem('UserId1')
    console.log(this.temp)
    this.message = this.temp

    return this.http.post(this.baseUrldebit, {

      customerno: this.message

    }).subscribe(

      response => {

        console.log(response)

        this.Data = JSON.parse(JSON.stringify(response));

        // this.creditdet = (this.Data.CREDIT.item);
        this.debitdet = (this.Data.IT_DEBIT.item);


        console.log(this.debitdet);
        this.debitno=this.debitdet.length;
        
        this.temp = localStorage.getItem('UserId1')
        console.log(this.temp)
        this.message = this.temp
       if(this.message !== '5')
       {
        this.flag3=true;
        this.toggle();
       }
      }

    )

  }
    callpay(){
      this.message = this.vendorId.getmessage()
      this.temp = localStorage.getItem('UserId1')
      console.log(this.temp)
      this.message = this.temp
    
    
      return this.http.post(this.baseUrlpay, {
      
      
      
      customerno: this.message
      
      
      
      }).subscribe(
      
      
      
      response => {
      
      
      
      console.log(response)
      
      
      
      this.Data = JSON.parse(JSON.stringify(response));
      
      
      
      this.paymentdet = (this.Data.T_OPEN.item);
      this.payno=this.paymentdet.length;
     
      this.temp = localStorage.getItem('UserId1')
      console.log(this.temp)
      this.message = this.temp
     if(this.message !== '5')
     {
      this.flag4=true;
      this.toggle();
     }
      
      
      }
      
      
      
      )
      
    }
    callinv(){
      this.message = this.vendorId.getmessage()
      this.temp = localStorage.getItem('UserId1')
      console.log(this.temp)
      this.message = this.temp

      return this.http.post(this.baseUrlinvoice, {
    
        customerno: this.message
    
      }).subscribe(
    
        response => {
    
          console.log(response)
    
          this.Data = JSON.parse(JSON.stringify(response));
    
          this.Invdet = (this.Data.INV_LIST.item);
          this.invno=this.Invdet.length;
          this.temp = localStorage.getItem('UserId1')
          console.log(this.temp)
          this.message = this.temp
         if(this.message !== '5')
         {
          this.flag5=true;
          this.toggle();
         }
    
          
        }
    
      )
    }
    callpo(){
      this.message = this.vendorId.getmessage();
      this.temp = localStorage.getItem('UserId1')
      console.log(this.temp)
      this.message = this.temp
  console.log(this.message);

 
  return this.http.post(this.baseUrlpo, {

    customerno: this.message

  }).subscribe(

    response => {

      console.log(response)

      this.Data = JSON.parse(JSON.stringify(response));

      this.podet1 = (this.Data.IT_HEADER.item);
      this.podet2 = (this.Data.IT_ITEM.item);
      this.pono=this.podet1.length + this.podet2.length;
     
      this.temp = localStorage.getItem('UserId1')
      console.log(this.temp)
      this.message = this.temp
     if(this.message !== '5')
     {
      this.flag6=true;
      this.toggle();
     }

     
    }

  )
    }
    callgoodreceipt(){
      this.message = this.vendorId.getmessage()
      this.temp = localStorage.getItem('UserId1')
      console.log(this.temp)
      this.message = this.temp

    return this.http.post(this.baseUrlgr, {

      customerno: this.message

    }).subscribe(

      response => {

        console.log(response)

        this.Data = JSON.parse(JSON.stringify(response));

        this.grdet1 = (this.Data.T_GOODS_HEAD.item);
        this.grdet2 = (this.Data.T_GOODS_VALUES.item);
        this.grno=this.grdet1.length + this.grdet2.length;
        
        this.temp = localStorage.getItem('UserId1')
      console.log(this.temp)
      this.message = this.temp
     if(this.message !== '5')
     {
      this.flag7=true;
      this.toggle();
     }


        
      }

    )
    }
    callrfq(){
      this.message = this.vendorId.getmessage()
      this.temp = localStorage.getItem('UserId1')
      console.log(this.temp)
      this.message = this.temp

    return this.http.post(this.baseUrlrfq, {

      customerno: this.message

    }).subscribe(

      response => {

        console.log(response)

        this.Data = JSON.parse(JSON.stringify(response));

        this.rfqdet1 = (this.Data.RFQ_HEAD.item);
        this.rfqdet2 = (this.Data.RFQ_VALUES.item);
        this.rfqno=this.rfqdet1.length + this.rfqdet2.length;
        this.temp = localStorage.getItem('UserId1')
        console.log(this.temp)
        this.message = this.temp
       if(this.message !== '5')
       {
        this.flag8=true;
        this.toggle();
       }
  
      
    
        

      }

    )
    }

    toggle() {
console.log(this.flag1,this.flag2,this.flag3,this.flag4,this.flag5,this.flag6,this.flag7,this.flag8)
      
      this.temp = localStorage.getItem('UserId1')
      console.log(this.temp)
      this.message = this.temp
     if(this.message !== '5')
     {
      if(this.flag1 === true && this.flag2 === true && this.flag3 === true && this.flag4 === true && this.flag5 === true && this.flag6 === true && this.flag7 === true && this.flag8 === true)
      {
       this.show = !this.show;
       this.hide = !this.hide;
      }
     }
     else {
       this.show = !this.show;
       this.hide = !this.hide;
      }
      
     }
     logoutfn(){
      localStorage.clear()
      this.router.navigateByUrl('/vplogin');
    }
  
}
