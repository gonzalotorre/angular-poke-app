import { TestBed } from '@angular/core/testing';

import { PokemonHabitatsService } from './pokemon-habitats.service';

describe('PokemonHabitatsService', () => {
  let service: PokemonHabitatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonHabitatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
