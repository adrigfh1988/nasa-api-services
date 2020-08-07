/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TechtransferService } from './techtransfer.service';

describe('Service: Techtransfer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechtransferService]
    });
  });

  it('should ...', inject([TechtransferService], (service: TechtransferService) => {
    expect(service).toBeTruthy();
  }));
});
