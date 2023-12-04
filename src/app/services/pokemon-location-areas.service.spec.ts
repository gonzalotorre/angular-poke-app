import { TestBed } from '@angular/core/testing';

import { PokemonLocationAreasService } from './pokemon-location-areas.service';

describe('PokemonLocationAreasService', () => {
  let service: PokemonLocationAreasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonLocationAreasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
