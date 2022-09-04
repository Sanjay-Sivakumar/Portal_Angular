import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup} from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { VendorIdServiceService } from '../vendor-id-service.service';

@Component({
  selector: 'app-vp-login-page',
  templateUrl: './vp-login-page.component.html',
  styleUrls: ['./vp-login-page.component.css']
})
export class VpLoginPageComponent implements OnInit {

  constructor(private vendorId:VendorIdServiceService,private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  login = this.fb.group({

    username : [''],

    password : ['']

  })

  ngOnInit(): void {
  }

  baseUrl: string='http://localhost:3000/vlogin'
  Data:any
  loginTo(){
    this.getLoginRes(this.login.value.username, parseInt(this.login.value.password));
  }

  getLoginRes(user: any , password: Number ){

    return this.http.post(this.baseUrl,{

      username:user,

      password:password

    }).subscribe(

      response =>{

        console.log(response)

        this.Data = JSON.parse(JSON.stringify(response));

        console.log(this.Data);
// this.Data.base64

         if(this.Data.NAME != ''){
this.vendorId.setmessage(user);
localStorage.setItem('UserId1',user.toString());
localStorage.setItem('UserName1',this.Data.NAME)
localStorage.setItem('Loguser','2')

         this.router.navigateByUrl('/vpdashboard');

         }

         else{

           console.log("Invalid");

       }

      }

    )

  }

}
