import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';
import { EmployeeVM } from './employee-vm';

@Pipe({
  name: 'employeefilter'
})
export class EmployeefilterPipe implements PipeTransform {

  transform(employees:EmployeeVM[],searchText:string):EmployeeVM[] {
    if(!employees || !searchText)
    {
        return employees.filter(emp=>
          emp.employee.FullName.toLowerCase().indexOf(searchText.toLowerCase())!==-1)
    }
  }

}
