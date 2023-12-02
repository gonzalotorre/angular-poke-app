import { GameIndice } from './game-indices';

export interface Pokemon {
  url: string;
  id: number;
  order: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  weight: number;
  sprites: any;
  location_area_encounters: string;
  types: PokemonType[];
  typesSecuence: string;
  abilities: PokemonAbilities[];
  abilitiesSecuence: string;
  species: GenericResponse;
  level_evolution: number;
  game_indices: GameIndice[];
  moves: PokemonMove[];
}

export interface PokemonType {
  slot: number;
  type: Type;
}

export interface Type {
  name: string;
  url: Type;
}

export interface PokemonAbilities {
  slot: number;
  is_hidden: boolean;
  ability: GenericResponse;
}

export interface PokemonHabitat {
  count: number;
  next: string;
  previous: string;
  results: GenericResponse[];
}

export interface PokemonHabitatDetail {
  id: number;
  name: string;
  pokemon_species: GenericResponse[];
}

export interface GenericResponse {
  name: string;
  url: string;
}
// Pokemon move
export interface Move {
  name: string;
  url: string;
}

export interface MoveLearnMethod {
  name: string;
  url: string;
}

export interface VersionGroup {
  name: string;
  url: string;
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  version_group: VersionGroup;
}

export interface PokemonMove {
  move: Move;
  version_group_details: VersionGroupDetail[];
}
