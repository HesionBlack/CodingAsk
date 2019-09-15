import { TestBed } from '@angular/core/testing';

import { SessionstorgeService } from './sessionstorge.service';

describe('SessionstorgeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionstorgeService = TestBed.get(SessionstorgeService);
    expect(service).toBeTruthy();
  });
});
