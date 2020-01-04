import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { Observable } from 'rxjs';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})

export class JobComponent implements OnInit {

  allJobs: Observable< Job[]> ;  

  constructor(private jobService:JobService) { }

  ngOnInit() {
    
     this.allJobs= this.jobService.getJobsList();
    }


  delete(jobId) {
    const ans = confirm('Are you sure you want to delete job with id: ' + jobId);
    if (ans) {
      this.jobService.deleteJob(jobId).subscribe((data) => {
      this.allJobs= this.jobService.getJobsList();
      });
    }
  }

  

}
