import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeIdService } from '../employee-id.service';

@Component({
  selector: 'app-ep-profile-page',
  templateUrl: './ep-profile-page.component.html',
  styleUrls: ['./ep-profile-page.component.css']
})
export class EpProfilePageComponent implements OnInit {

  constructor(private empId: EmployeeIdService, public router: Router, private http: HttpClient) { }

  san :String ="2";
  id:any;
  name:any;
  contact:any;
  address:any;
  pincode:any;
  Practice:any;
  designation:any;
  message:any;
  baseUrl : string='http://localhost:3000/eprofile';
  Data:any;
  profiledet:any;
  leavedet:any;
  MAT_DOC:any;
  p : number=1;
  searchText:any;
  temp:any;
  
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
  
          //this.profiledet = (this.Data.COMPANY_ADDRESS.item);
          console.log(this.Data.EMP_DATA)
          this.name=this.Data.EMP_DATA.ENAME 
          this.id=this.Data.EMP_DATA.PERNR
          this.contact=this.Data.EMP_DATA.TELNR
          this.address =this.Data.EMP_DATA.STRAS+''+this.Data.EMP_DATA.ORT01
          this.pincode=this.Data.EMP_DATA.PSTLZ 
          this.Practice=this.Data.EMP_DATA.ORGEH_TXT
          this.designation=this.Data.EMP_DATA.PLANS_TXT


  
        }
  
      )
  
    }

}
