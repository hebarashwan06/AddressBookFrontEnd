import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Job } from './job';


@Injectable({
  providedIn: 'root'
})

export class JobService {

  appUrl: string;
  apiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };    
  

  constructor(private http:HttpClient) {
    this.appUrl = environment.appUrl;
    this.apiUrl = 'api/Jobs/';
  }

  getJobsList():Observable<Job[]>{
    return this.http.get<Job[]>(this.appUrl+this.apiUrl+'GetAll').pipe();
  }

  getJobById(jobId:number):Observable<Job>{
    return this.http.get<Job>(this.appUrl+this.apiUrl+'GetById/'+ jobId).pipe();
  }

  createJob(job:Job):Observable<Job>{
    return this.http.post<Job>(this.appUrl+this.apiUrl+'Add',JSON.stringify(job),this.httpOptions).pipe(); 
  }

  editJob(job:Job):Observable<Job>{
    return this.http.put<Job>(this.appUrl+this.apiUrl+'Edit',JSON.stringify(job),this.httpOptions).pipe(); 
  }

  deleteJob(jobId:number):Observable<Job>    {    
    return this.http.delete<Job>(this.appUrl + this.apiUrl + 'Delete/'+jobId).pipe();    
  }  
}
