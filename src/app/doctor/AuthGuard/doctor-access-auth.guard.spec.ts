import { TestBed } from '@angular/core/testing';

import { DoctorAccessAuthGuard } from './doctor-access-auth.guard';

describe('DoctorAccessAuthGuard', () => {
  let guard: DoctorAccessAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DoctorAccessAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
