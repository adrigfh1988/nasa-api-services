/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TechportService } from './techport.service';

describe('Service: Techport', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechportService]
    });
  });

  it('should ...', inject([TechportService], (service: TechportService) => {
    expect(service).toBeTruthy();
  }));
});
