import { TestBed } from '@angular/core/testing';

import { LogRegAuthGuard } from './log-reg-auth.guard';

describe('LogRegAuthGuard', () => {
  let guard: LogRegAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogRegAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
