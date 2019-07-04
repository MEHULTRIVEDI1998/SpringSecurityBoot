import { TestBed } from '@angular/core/testing';

import { SharedServiceUserService } from './shared-service-user.service';

describe('SharedServiceUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedServiceUserService = TestBed.get(SharedServiceUserService);
    expect(service).toBeTruthy();
  });
});
