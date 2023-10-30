import { TestBed } from '@angular/core/testing';

import { TuneVehicleRepositoryDummyImplService } from './tune-vehicle-repository-dummy-impl.service';

describe('TuneVehicleRepositoryDummyImplService', () => {
  let service: TuneVehicleRepositoryDummyImplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuneVehicleRepositoryDummyImplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
