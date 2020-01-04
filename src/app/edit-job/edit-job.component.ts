import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Job } from '../job';
import { Router, ActivatedRoute } from '@angular/router';
import { JobService } from '../job.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {

  editForm:FormGroup;
  jobId:number;
  job:Job;

  constructor(private formBuilder: FormBuilder, private router: Router, private jobService: JobService,private acroute: ActivatedRoute) {
     this.jobId=this.acroute.snapshot.params["id"];

     this.editForm = this.formBuilder.group({
      Id:0,
      Title: ['', Validators.required],

     });
    }

  ngOnInit() {
    
      this.jobService.getJobById(this.jobId)
      .subscribe(data => (
        this.job = data,
        this.editForm.controls['Title'].setValue(data.Title)
      )); 
    }       
  

  onSubmit() {

    let job: Job = {
      Id: this.job.Id,
      Title: this.editForm.get('Title').value
    };


    this.jobService.editJob(job)
    .subscribe((data) => {  
      this.router.navigate(['/Jobs']);  
    });
    
 }

}
