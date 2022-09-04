import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CpUserDetailsService {

  constructor() { }
  userdetails:any

  setmessage(userdetails:any){

    this.userdetails=userdetails;

  }

  getmessage(){

    return this.userdetails;

  }
}
