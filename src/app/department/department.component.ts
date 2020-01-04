import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../Department.service';
import { Observable } from 'rxjs';
import { Department } from '../Department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})

export class DepartmentComponent implements OnInit {

  allDepartments: Observable< Department[]> ;  

  constructor(private departmentService:DepartmentService) { }

  ngOnInit() {
    
     this.allDepartments= this.departmentService.getDepartmentsList();
    }


  delete(departmentId) {
    const ans = confirm('Are you sure you want to delete department with id: ' + departmentId);
    if (ans) {
      this.departmentService.DeleteDepartment(departmentId).subscribe((data) => {
      this.allDepartments= this.departmentService.getDepartmentsList();
      });
    }
  }

  

  
}
