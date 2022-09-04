import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CpCustPayService {

  constructor() { }

  customernumber:any
  customersalesdoc:any
  custdet:string[]=[];
  

  setmessage(custno:any,salesdoc:any){

    this.customernumber=custno;
    this.customersalesdoc=salesdoc;

  }

  getmessage(){

    this.custdet[0]=this.customernumber;
    this.custdet[1]=this.customersalesdoc;
    return this.custdet;

  }
}
