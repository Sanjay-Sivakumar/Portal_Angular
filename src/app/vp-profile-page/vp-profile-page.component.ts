import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VendorIdServiceService } from '../vendor-id-service.service';

@Component({
  selector: 'app-vp-profile-page',
  templateUrl: './vp-profile-page.component.html',
  styleUrls: ['./vp-profile-page.component.css']
})
export class VpProfilePageComponent implements OnInit {

  constructor(private http: HttpClient,private VendorId:VendorIdServiceService) { }

  baseUrl : string='http://localhost:3000/vprofile';
  message:any;
  profiledet:any;
street:any;
district:any;
data:any;
state:any;
san:any;
name:any;
ID:any
phone:any
country:any;
city:any
Postal:any;
temp:any

  ngOnInit(): any {
  
    this.message = this.VendorId.getmessage()
    console.log(this.message)
    this.temp = localStorage.getItem('UserId1')
    console.log(this.temp)
    this.message = this.temp
   

    return this.http.post(this.baseUrl, {

      customerno: this.message

    }).subscribe(

      response => {

        console.log(response)

        this.data = JSON.parse(JSON.stringify(response));
        this.profiledet = this.data.VEND_PROFILE
        this.name = this.profiledet.FNAME
        this.san=this.name;
        this.ID=this.profiledet.VENDOR
        this.phone=this.profiledet.TELEPHONE
        this.country=this.profiledet.COUNTRY
        this.city=this.profiledet.CITY
        this.Postal=this.profiledet.PINCODE
        this.street = this.profiledet.ADDRESS
        console.log(this.name)
    
      }

    )

  }

}
