import { Employee } from './employee';
import { Department } from './Department';
import { Job } from './job';
import { Phone } from './phone';
import { Address } from './address';

export class EmployeeVM {
    employee:Employee;
    department:Department;
    job:Job;
    addresses:Address[];
    phones:Phone[]
}
