import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cp-home-page',
  templateUrl: './cp-home-page.component.html',
  styleUrls: ['./cp-home-page.component.css']
})
export class CpHomePageComponent implements OnInit {
  

  constructor(private route:Router) { 
    
  }

  ngOnInit(): void {
  }

  login() {
    this.route.navigate(['/loginPage']);
  }

}
