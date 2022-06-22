import { TestBed } from '@angular/core/testing';

import { MacroalgaeService } from './macroalgae.service';

describe('MacroalgaeService', () => {
  let service: MacroalgaeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MacroalgaeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
