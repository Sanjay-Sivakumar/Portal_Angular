import { CustomerIdService } from '../customer-id.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CpUserDetailsService } from '../cp-user-details.service';

@Component({
  selector: 'app-cp-login-page',
  templateUrl: './cp-login-page.component.html',
  styleUrls: ['./cp-login-page.component.css']
})
export class CpLoginPageComponent implements OnInit {

  constructor(private customernumber:CustomerIdService,private fb: FormBuilder, private http: HttpClient, private router: Router,private userdet:CpUserDetailsService) { }

  login = this.fb.group({

    username : [''],

    password : ['']

  })

  ngOnInit(): void {
  }

  baseUrl: string='http://localhost:3000/login'
  Data:any
  loginTo(){
    this.getLoginRes(parseInt(this.login.value.username), parseInt(this.login.value.password));
  }

  getLoginRes(user: Number , password: Number ){

    return this.http.post(this.baseUrl,{

      username:user,

      password:password

    }).subscribe(

      response =>{

        console.log(response)

        this.Data = JSON.parse(JSON.stringify(response));

        console.log(this.Data);
// this.Data.base64

         if(this.Data.STATUS === '0X02'){

        //   localStorage.setItem(''+user,''+password);
        this.customernumber.setmessage(user,this.Data.NAME)
         this.userdet.setmessage(this.Data.IT_OUTPUT);
         localStorage.setItem('log','0')
         localStorage.setItem('UserId',user.toString());
         localStorage.setItem('UserName',this.Data.NAME)
         this.router.navigateByUrl('/dashboard');

         }

         else{

           console.log("Invalid");

       }

      }

    )

  }

}
