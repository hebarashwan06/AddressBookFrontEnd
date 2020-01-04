import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeVM } from '../employee-vm';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  allEmployees: Observable<EmployeeVM[]> ;  
  searchText:string;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
     this.allEmployees= this.employeeService.getEmployeesList();
    }


  delete(employeeId) {
    const ans = confirm('Are you sure you want to delete employee with id: ' + employeeId);
    if (ans) {
      this.employeeService.DeleteEmployee(employeeId).subscribe((data) => {
      this.allEmployees= this.employeeService.getEmployeesList();
      });
    }
  }

  


}
