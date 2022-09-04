import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeIdService {

  constructor() { }

  empId:any;
  setmessage(empId:any){

    this.empId = empId;

  }

  getmessage(){
    return this.empId;

  }


}
