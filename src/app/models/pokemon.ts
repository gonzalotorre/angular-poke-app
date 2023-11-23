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
  ability: Ability;
}

export interface Ability {
  name: string;
  url: Type;
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
