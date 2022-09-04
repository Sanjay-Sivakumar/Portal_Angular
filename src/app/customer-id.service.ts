import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerIdService {

  constructor() { 
    
  }
  customernumber:any
  customername:any
  custdet:string[]=[];
  

  setmessage(custno:any,custname:any){

    this.customernumber=custno;
    this.customername=custname;

  }

  getmessage(){

    this.custdet[0]=this.customernumber;
    this.custdet[1]=this.customername;
    return this.custdet;

  }
}

