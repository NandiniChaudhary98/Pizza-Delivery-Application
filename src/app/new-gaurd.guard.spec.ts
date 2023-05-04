import { TestBed } from '@angular/core/testing';

import { NewGaurdGuard } from './new-gaurd.guard';

describe('NewGaurdGuard', () => {
  let guard: NewGaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NewGaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
