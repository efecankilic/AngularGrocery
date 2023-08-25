import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { testaaGuard } from './testaa.guard';

describe('testaaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => testaaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
