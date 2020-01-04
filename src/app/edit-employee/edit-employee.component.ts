import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeVM } from '../employee-vm';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../Department.service';
import { EmployeeService } from '../employee.service';
import { JobService } from '../job.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})

export class EditEmployeeComponent implements OnInit {

  editForm:FormGroup;
  employeeId:number;
  empModel:EmployeeVM;
  deptName:string;
  departmentsList: Array<any> = [];  
  jobsList:Array<any> = [];
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$";

  constructor(private formBuilder: FormBuilder, private router: Router, private departmentService: DepartmentService,private employeeService: EmployeeService,private jobService: JobService,private acroute: ActivatedRoute) {
     this.employeeId=this.acroute.snapshot.params["id"];

     this.departmentService.getDepartmentsList().subscribe(
      data => this.departmentsList = data  
    );

    this.jobService.getJobsList().subscribe(
      data => this.jobsList = data  
    );

    this.editForm = this.formBuilder.group({
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

  ngOnInit() {
    
      this.employeeService.getEmployeeById(this.employeeId)
      .subscribe(data => (
        this.empModel = data,
        this.editForm.controls['FullName'].setValue(data.employee.FullName),
        this.editForm.controls['BirthDate'].setValue(data.employee.BirthDate),
        this.editForm.controls['Email'].setValue(data.employee.Email),
        this.editForm.controls['FullName'].setValue(data.employee.FullName),
        this.editForm.controls['PhotoUrl'].setValue(data.employee.PhotoUrl),
        this.editForm.controls['Age'].setValue(data.employee.Age),
        this.editForm.controls['DepartmentName'].setValue(data.employee.DepartmentId),
        this.editForm.controls['JobTitle'].setValue(data.employee.JobId)
        )); 
    }       
  

  onSubmit() {

    let empModel: EmployeeVM = {
      employee:{
        FullName:this.editForm.get('FullName').value,
        BirthDate:this.editForm.get('BirthDate').value,
        Email:this.editForm.get('Email').value,
        Password:this.editForm.get('Password').value,
        PhotoUrl:this.editForm.get('PhotoUrl').value,
        Age:this.editForm.get('Age').value,
        Id:0,
        DepartmentId:this.editForm.get('DepartmentName').value,
        JobId:this.editForm.get('JobTitle').value
      },

      job:null,
      department:null,
      addresses:null,
      phones:null
    };

    this.employeeService.EditEmployee(empModel)
    .subscribe((data) => {  
      this.router.navigate(['/Employees']);  
    });
    
 }

}
