import { TestBed } from '@angular/core/testing';

import { WeathersrviceService } from './weathersrvice.service';

describe('WeathersrviceService', () => {
  let service: WeathersrviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeathersrviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
