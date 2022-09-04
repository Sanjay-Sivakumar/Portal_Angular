import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendorIdServiceService {

  

  constructor() { }

  vendorId:any; 
  invoiceId:any;
  vendorName:any;
  setmessage(vendorId:any){

    this.vendorId = vendorId;

  }

  getmessage(){
    return this.vendorId;

  }

  setmessage1(invoiceId:any){

    this.invoiceId = invoiceId;

  }

  getmessage1(){
    return this.invoiceId;

  }

  setmessage2(name:any){

    this.vendorName = name;

  }

  getmessage2(){
    return this.vendorName;

  }

}
