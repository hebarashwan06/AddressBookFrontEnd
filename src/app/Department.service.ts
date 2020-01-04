import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from './Department';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  
  //Url = 'https://localhost:44348/Api/';
  appUrl: string;
  apiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };    
  

  constructor(private http:HttpClient) {
    this.appUrl = environment.appUrl;
    this.apiUrl = 'api/Departments/';
  }

  getDepartmentsList():Observable<Department[]>{
    return this.http.get<Department[]>(this.appUrl+this.apiUrl+'GetAll').pipe();
  }

  getDepartmentById(departmentId:number):Observable<Department>{
    return this.http.get<Department>(this.appUrl+this.apiUrl+'GetById/'+ departmentId).pipe();
  }

  createDepartment(department:Department):Observable<Department>{
    return this.http.post<Department>(this.appUrl+this.apiUrl+'Add',JSON.stringify(department),this.httpOptions).pipe(); 
  }

  EditDepartment(department:Department):Observable<Department>{
    return this.http.put<Department>(this.appUrl+this.apiUrl+'Edit',JSON.stringify(department),this.httpOptions).pipe(); 
  }

  DeleteDepartment(departmentId:number):Observable<Department>    {    
    return this.http.delete<Department>(this.appUrl + this.apiUrl + 'Delete/'+departmentId).pipe();    
  }  

  }

