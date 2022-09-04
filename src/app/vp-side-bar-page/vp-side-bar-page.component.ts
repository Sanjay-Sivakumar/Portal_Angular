import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vp-side-bar-page',
  templateUrl: './vp-side-bar-page.component.html',
  styleUrls: ['./vp-side-bar-page.component.css']
})
export class VpSideBarPageComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  baseUrl : string='http://localhost:3000/payslipdf';

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
