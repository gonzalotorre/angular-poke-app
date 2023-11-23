import { TestBed } from '@angular/core/testing';

import { PokemonLocationsService } from './pokemon-locations.service';

describe('PokemonLocationsService', () => {
  let service: PokemonLocationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonLocationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
