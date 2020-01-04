import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentService } from '../Department.service';
import { Department } from '../Department';


@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})

export class CreateDepartmentComponent implements OnInit {

  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private departmentService: DepartmentService) { }

  
  ngOnInit() {

    this.addForm = this.formBuilder.group({
     Name: ['', Validators.required],
    });

  } 
    
  onSubmit() {
    let department: Department = {
      Id:0,
      Name: this.addForm.get('Name').value
    };


    this.departmentService.createDepartment(department)
    .subscribe((data) => {  
      this.router.navigate(['/Departments']);  
    });
 }

}
