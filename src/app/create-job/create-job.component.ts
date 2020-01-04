import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from '../job.service';
import { Job } from '../job';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {

  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private jobservice: JobService) { }

  
  ngOnInit() {

    this.addForm = this.formBuilder.group({
     Title: ['', Validators.required],
    });

  } 
    
  onSubmit() {
    let job: Job = {
      Id:0,
      Title: this.addForm.get('Title').value
    };


    this.jobservice.createJob(job)
    .subscribe((data) => {  
      this.router.navigate(['/Jobs']);  
    });
 }

}
