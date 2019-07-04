import { TestBed } from '@angular/core/testing';

import { SpringSecurityCrudService } from './spring-security-crud.service';

describe('SpringSecurityCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpringSecurityCrudService = TestBed.get(SpringSecurityCrudService);
    expect(service).toBeTruthy();
  });
});
