import { TestBed } from '@angular/core/testing';

import { DepartmentService } from './Department.service';

describe('DepartmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepartmentService = TestBed.get(DepartmentService);
    expect(service).toBeTruthy();
  });
});
