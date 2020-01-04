import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../Department.service';
import { Department } from '../Department';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})

export class EditDepartmentComponent implements OnInit {

  editForm:FormGroup;
  departmentId:number;
  dept:Department;
  deptName:string;

  constructor(private formBuilder: FormBuilder, private router: Router, private departmentService: DepartmentService,private acroute: ActivatedRoute) {
     this.departmentId=this.acroute.snapshot.params["id"];
     this.editForm = this.formBuilder.group({
      Id:0,
      Name: ['', Validators.required],

     });
    }

  ngOnInit() {
    
      this.departmentService.getDepartmentById(this.departmentId)
      .subscribe(data => (
        this.dept = data,
        this.editForm.controls['Name'].setValue(data.Name)
      )); 
    }       
  

  onSubmit() {

    let department: Department = {
      Id: this.dept.Id,
      Name: this.editForm.get('Name').value
    };


    this.departmentService.EditDepartment(department)
    .subscribe((data) => {  
      this.router.navigate(['/Departments']);  
    });
    
 }


}
