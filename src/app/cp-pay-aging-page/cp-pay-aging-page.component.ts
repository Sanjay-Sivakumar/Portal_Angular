import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';

import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  CustomerIdService
} from '../customer-id.service';
import {
  MatDialog,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { CpCustPayService } from '../cp-cust-pay.service';




@Component({
  selector: 'app-cp-pay-aging-page',
  templateUrl: './cp-pay-aging-page.component.html',
  styleUrls: ['./cp-pay-aging-page.component.css']
})
export class CpPayAgingPageComponent implements OnInit {

  constructor(private payage:CpCustPayService,private customernumber: CustomerIdService, public router: Router, private http: HttpClient, private dialog: MatDialog) {}
  baseUrl: string = 'http://localhost:3000/invoice';

  Data: any;

  doctyp: any;

  payagedet: any;

  message: any;
  paydet: String[] = [];

  p: number = 1;
  name:any;
  temp:any


  ALLOC_NMBR: any;
  custnumber: any
  searchtext:any;
  ngOnInit(): any {

    //const dialogRef = this.dialog.open(Popover);

    // const dialogRef = this.dialog.open(AppDialog,{data:{data:data}});

    this.message = this.customernumber.getmessage()
    this.name = this.message[1]
    this.temp = localStorage.getItem('UserId')
    console.log(this.temp)
    this.message[0] = this.temp
    this.temp = localStorage.getItem('UserName')
    this.name = this.temp
    return this.http.post(this.baseUrl, {

      customerno: this.message[0]

    }).subscribe(

      response => {

        console.log(response)

        this.Data = JSON.parse(JSON.stringify(response));

        this.payagedet = (this.Data.INV_DET.item);
       

        console.log(this.payagedet);

        var k = 0;
        for (var i = 0; i < this.payagedet.length; i++) {
          if (this.payagedet[i].VBEL2 != "" && this.payagedet[i].SHKZG === 'S') {
            console.log(this.payagedet[i]);
            this.paydet.push(this.payagedet[i]);
            
          }
        }
        let myset = [...new Set(this.paydet)];
        this.payagedet = myset;
        console.log(myset);

      }

    )

  }
  search() {
    if (this.ALLOC_NMBR == "") {
      this.ngOnInit();
    } else {
      this.payagedet = this.payagedet.filter((res: {
        ALLOC_NMBR: string;
      }) => {
        return res.ALLOC_NMBR.toLocaleLowerCase().match(this.ALLOC_NMBR.toLocaleLowerCase());
      })
    }
  }
  key: string = '';
  reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  ageCalculate(d1:any,d2:any){
    var date1 = new Date(d1); //last date
    var date2 = new Date(d2);
    let currentDate = new Date(); 
    var Time1 = currentDate.getTime() - date1.getTime();
    var Days1 = Time1 / ( 1000 * 3600 * 24);
    if(Days1>0)
    {
      return "Payment Date Exceed"; 
    }
    else{
    
    var Time = date1.getTime() - currentDate.getTime();
    var Days = Time / (1000 * 3600 * 24);
    console.log(Days); //Diference in Days.
    return Days;
    }
  }
  onPayClick(item:any){

    this.payage.setmessage(item.KUNNR,item.VBEL2);
    this.router.navigateByUrl('/paymentdetails');

  }

}
@Component({
  selector: 'popover',
  templateUrl: './popover.html'
})
export class Popover {
  // Item;
  // constructor(@Inject(MAT_DIALOG_DATA) public data: any){
  //     console.log(data);
  //     this.Item = JSON.parse(JSON.stringify(data.data));
  //     console.log(this.Item);
  // }
}
