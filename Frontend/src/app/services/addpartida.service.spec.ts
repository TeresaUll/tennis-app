import { TestBed } from '@angular/core/testing';

import { AddpartidaService } from './addpartida.service';

describe('AddpartidaService', () => {
  let service: AddpartidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddpartidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
