import { TestBed } from '@angular/core/testing';

import { PokemonEvolutionsService } from './pokemon-evolutions.service';

describe('PokemonEvolutionsService', () => {
  let service: PokemonEvolutionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonEvolutionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
