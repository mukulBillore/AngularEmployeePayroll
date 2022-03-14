import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  public title:string="Employee Payroll";


 // When a component get  initialized the ngOnInit function is called first
  ngOnInit(): void {
  }

  // TO navigate the user  to DashboardComponent 
  onDashboard(){
    this.router.navigate(["dashboard"]);
  }

  // To navigate to form component
  onForm(){
    this.router.navigate(["form"]);
  }
}
