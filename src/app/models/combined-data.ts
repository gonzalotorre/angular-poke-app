import { Pokemon } from './pokemon';
import { PokemonSpecie } from './pokemon-specie';

export interface CombinedData {
  pokemon: Pokemon;
  pokemonSpecie: PokemonSpecie | undefined;
}
