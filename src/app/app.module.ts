import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { HttpClientModule} from "@angular/common/http";
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartmentService } from './Department.service';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { JobService } from './job.service';
import { JobComponent } from './job/job.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { EmployeeService } from './employee.service';
import { EmployeeComponent } from './employee/employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeefilterPipe } from './employeefilter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    CreateDepartmentComponent,
    EditDepartmentComponent,
    JobComponent,
    CreateJobComponent,
    EditJobComponent,
    EmployeeComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    EmployeefilterPipe,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [DepartmentService,JobService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
