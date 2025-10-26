import { TestBed } from '@angular/core/testing';

import { AllProuductsService } from './all-prouducts.service';

describe('AllProuductsService', () => {
  let service: AllProuductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllProuductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
