import { TestBed } from '@angular/core/testing';

import { PokemonAbilitiesService } from './pokemon-abilities.service';

describe('PokemonAbilitiesService', () => {
  let service: PokemonAbilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonAbilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
