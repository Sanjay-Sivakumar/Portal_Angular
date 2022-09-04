import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { CpUserDetailsService } from '../cp-user-details.service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-cp-profile-page',
  templateUrl: './cp-profile-page.component.html',
  styleUrls: ['./cp-profile-page.component.css']
})
export class CpProfilePageComponent implements OnInit {

  constructor(private userdet:CpUserDetailsService) { }
  san :String ="2";
  id:any;
  name:any;
  contact:any;
  contry:any;
  state:any;
  district:any;
  city:any;
  street:any;
  postalcode:any;
  userDet:any;
  ngOnInit(): void {
    this.userDet = this.userdet.getmessage()
    console.log(this.userDet);
    this.id=this.userDet.CUSTOMER;
    this.name=this.userDet.NAME +"  "+this.userDet.NAME_2;
    this.contact=this.userDet.TELEPHONE;
    this.contry=this.userDet.COUNTRY;
    this.state="Tamilnadu";
    this.district=this.userDet.MATCHCODE3;
    this.city=this.userDet.CITY;
    this.street=this.userDet.STREET;
    this.postalcode=this.userDet.POSTL_CODE;
    this.san=this.name;

  }

}
