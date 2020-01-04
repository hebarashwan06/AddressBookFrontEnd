import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';
import { Observable } from 'rxjs';
import { EmployeeVM } from './employee-vm';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  appUrl: string;
  apiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };    
  

  constructor(private http:HttpClient) {
    this.appUrl = environment.appUrl;
    this.apiUrl = 'api/Employees/';
  }

  getEmployeesList():Observable<EmployeeVM[]>{
    return this.http.get<EmployeeVM[]>(this.appUrl+this.apiUrl+'GetAll').pipe();
  }

  getEmployeeById(employeeId:number):Observable<EmployeeVM>{
    return this.http.get<EmployeeVM>(this.appUrl+this.apiUrl+'GetById/'+ employeeId).pipe();
  }

  createEmployee(employeeVM:EmployeeVM):Observable<EmployeeVM>{
    return this.http.post<EmployeeVM>(this.appUrl+this.apiUrl+'Add',JSON.stringify(employeeVM),this.httpOptions).pipe(); 
  }

  EditEmployee(employeeVM:EmployeeVM):Observable<EmployeeVM>{
    return this.http.put<EmployeeVM>(this.appUrl+this.apiUrl+'Edit',JSON.stringify(employeeVM),this.httpOptions).pipe(); 
  }

  DeleteEmployee(employeeId:number):Observable<EmployeeVM>    {    
    return this.http.delete<EmployeeVM>(this.appUrl + this.apiUrl + 'Delete/'+employeeId).pipe();    
  }  

}
