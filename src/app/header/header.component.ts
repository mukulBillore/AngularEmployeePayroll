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


 //when a component get initialized the ngOnInit function is called first
  ngOnInit(): void {
  }

  // this function navigate the user from header to DashboardComponent or we can say that navigate to dashbard view
  onDashboard(){
    this.router.navigate(["dashboard"]);
  }

  // navigate to form component
  onForm(){
    this.router.navigate(["form"]);
  }
}
