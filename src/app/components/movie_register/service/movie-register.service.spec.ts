import { TestBed } from '@angular/core/testing';

import { MovieRegisterService } from './movie-register.service';

describe('MovieRegisterService', () => {
  let service: MovieRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
