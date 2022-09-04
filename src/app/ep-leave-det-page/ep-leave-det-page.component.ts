import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeIdService } from '../employee-id.service';

@Component({
  selector: 'app-ep-leave-det-page',
  templateUrl: './ep-leave-det-page.component.html',
  styleUrls: ['./ep-leave-det-page.component.css']
})
export class EpLeaveDetPageComponent implements OnInit {

  constructor(private empId:EmployeeIdService, public router: Router, private http: HttpClient) { }

  message:any;
baseUrl : string='http://localhost:3000/eleave';
Data:any;
leavebaldet:any;
leavedet:any;
MAT_DOC:any;
p : number=1;
searchText:any;
temp:any

  ngOnInit(): any {

    this.message = this.empId.getmessage()
    this.temp = localStorage.getItem('UserId2')
    console.log(this.temp)
    this.message = this.temp

    return this.http.post(this.baseUrl, {

      customerno: this.message

    }).subscribe(

      response => {

        console.log(response)

        this.Data = JSON.parse(JSON.stringify(response));

        this.leavebaldet = (this.Data.IT_LEAVE_BALANCE.item);
        this.leavedet = (this.Data.IT_LEAVE_DETAIL.item);


      }

    )

  }
  search(){
    if(this.MAT_DOC == "")
    {
      this.ngOnInit();
    }
    // else{
    //   this.deliverydet = this.deliverydet.filter((res: { MAT_DOC: string; }) =>{
    //     return res.MAT_DOC.toLocaleLowerCase().match(this.MAT_DOC.toLocaleLowerCase());
    //   })
    // }
  }
  
  key : string='';
  reverse:boolean = false;
  sort(key: string)
  {
    this.key=key;
    this.reverse = !this.reverse;
  }


}
