import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { EmployeeIdService } from '../employee-id.service';

@Component({
  selector: 'app-ep-login-page',
  templateUrl: './ep-login-page.component.html',
  styleUrls: ['./ep-login-page.component.css']
})
export class EpLoginPageComponent implements OnInit {

  constructor(private employeeId:EmployeeIdService,private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  login = this.fb.group({

    username : [''],

    password : ['']

  })

  ngOnInit(): void {
  }

  baseUrl: string='http://localhost:3000/elogin'
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


         if(this.Data.RESULT === '0X02'){

        //   localStorage.setItem(''+user,''+password);
        this.employeeId.setmessage(user)
        localStorage.setItem('UserId2',user.toString());
        localStorage.setItem('Loguser','3')
         this.router.navigateByUrl('/sidenavbar');

         }

         else{

           console.log("Invalid");

       }

      }

    )

  }
}
