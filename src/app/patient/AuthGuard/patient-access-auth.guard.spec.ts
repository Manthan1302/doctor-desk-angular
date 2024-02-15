import { TestBed } from '@angular/core/testing';

import { PatientAccessAuthGuard } from './patient-access-auth.guard';

describe('PatientAccessAuthGuard', () => {
  let guard: PatientAccessAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PatientAccessAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
