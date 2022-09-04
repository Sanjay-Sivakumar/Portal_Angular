import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CpInvoiceDetailsService {

  constructor() { }
  invoiceDetails:any

  setmessage(invoiceDetails:any){

    this.invoiceDetails=invoiceDetails;

  }

  getmessage(){

    return this.invoiceDetails;

  }
}
