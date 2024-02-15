import { TestBed } from '@angular/core/testing';

import { RegLogAuthGuard } from './reg-log-auth.guard';

describe('RegLogAuthGuard', () => {
  let guard: RegLogAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegLogAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
