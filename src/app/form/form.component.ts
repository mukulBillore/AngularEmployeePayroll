import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/Model/employee';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  employee:Employee =new Employee("","","",0,"");
  
  constructor(private router:Router) { }
  

  ngOnInit(): void {
  }

  onCancel(){
    this.router.navigate(["dashboard"]);
  }

  onSubmit(form:NgForm){
    // console.log(form.value);
    console.log(this.employee);
  }
   getVal(value:String){
     console.log(value);
     this.employee.departmentEmp=value;
   }

}
