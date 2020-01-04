import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { JobComponent } from './job/job.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { EmployeeComponent } from './employee/employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';


const routes: Routes = [
  { path: '', component: DepartmentComponent, pathMatch: 'full' },
  { path: 'CreateDepartment', component: CreateDepartmentComponent },
  { path: 'Departments', component: DepartmentComponent },
  { path: 'EditDepartment/:id', component: EditDepartmentComponent },
  { path: 'CreateJob', component: CreateJobComponent },
  { path: 'Jobs', component: JobComponent },
  { path: 'EditJob/:id', component: EditJobComponent },
  { path: 'CreateEmployee', component: CreateEmployeeComponent },
  { path: 'Employees', component: EmployeeComponent },
  { path: 'EditEmployee/:id', component: EditEmployeeComponent },

  { path: '**', redirectTo: '/' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
