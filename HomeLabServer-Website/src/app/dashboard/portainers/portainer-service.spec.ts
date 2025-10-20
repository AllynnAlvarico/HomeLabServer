import { TestBed } from '@angular/core/testing';

import { PortainerService } from './portainer-service';

describe('PortainerService', () => {
  let service: PortainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
