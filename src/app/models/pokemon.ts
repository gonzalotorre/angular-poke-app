import { types } from 'util';

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
