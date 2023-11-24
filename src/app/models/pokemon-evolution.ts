import { GenericResponse } from './pokemon';

export interface PokemonEvolutionDetails {
  min_level: number;
}

export interface PokemonEvolutionChain {
  evolution_details: PokemonEvolutionDetails[];
  evolves_to: PokemonEvolutionChain[];
  is_baby: boolean;
  species: GenericResponse;
}

export interface PokemonEvolution {
  id: number;
  baby_trigger_item: string;
  chain: PokemonEvolutionChain;
}

export interface PokemonEvolutionsResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonEvolutionsResponseResults;
}

export interface PokemonEvolutionsResponseResults {
  url: string;
}

export interface Evolution {
  name: string;
  url: string;
  level_evolution: number;
}
