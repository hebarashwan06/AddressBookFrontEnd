import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { EmployeeVM } from '../employee-vm';
import { Employee } from '../employee';
import { Job } from '../job';
import { Department } from '../Department';
import { DepartmentService } from '../Department.service';
import { JobService } from '../job.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})

export class CreateEmployeeComponent implements OnInit {

  addForm: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$";
  departmentsList: Array<any> = [];  
  jobsList:Array<any> = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private employeeService: EmployeeService,private departmentService:DepartmentService,private jobService:JobService) {

   }

  
  ngOnInit() {

    this.departmentService.getDepartmentsList().subscribe(
      data => this.departmentsList = data  
    );

    this.jobService.getJobsList().subscribe(
      data => this.jobsList = data  
    );

    this.addForm = this.formBuilder.group({
     FullName: ['', Validators.required],
     BirthDate:[],
     Email:['',[Validators.required,Validators.pattern(this.emailPattern)]],
     Password:['', Validators.required],
     PhotoUrl:[],
     Age:[],
     DepartmentName:[],
     JobTitle:[],
     //Phone:['',Validators.pattern(this.phoneNumber)]
    });

  } 
    
  onSubmit() {
    let empModel: EmployeeVM = {
      employee:{
        FullName:this.addForm.get('FullName').value,
        BirthDate:this.addForm.get('BirthDate').value,
        Email:this.addForm.get('Email').value,
        Password:this.addForm.get('Password').value,
        PhotoUrl:this.addForm.get('PhotoUrl').value,
        Age:this.addForm.get('Age').value,
        Id:0,
        DepartmentId:this.addForm.get('DepartmentName').value,
        JobId:this.addForm.get('JobTitle').value
      },

      job:null,
      department:null,
      addresses:null,
      phones:null
    };


    this.employeeService.createEmployee(empModel)
    .subscribe((data) => {  
      this.router.navigate(['/Employees']);  
    });
 }


}
