import { TestBed } from '@angular/core/testing';

import { PizzaUserService } from './pizza-user.service';

describe('PizzaUserService', () => {
  let service: PizzaUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
