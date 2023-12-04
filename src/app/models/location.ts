export interface Language {
  name: string;
  url: string;
}

export interface Area {
  name: string;
  url: string;
}

export interface Generation {
  name: string;
  url: string;
}

export interface GameIndex {
  game_index: number;
  generation: Generation;
}

export interface Region {
  name: string;
  url: string;
}

export interface Name {
  language: Language;
  name: string;
}

export interface PokemonsLocation {
  areas: Area[];
  game_indices: GameIndex[];
  id: number;
  name: string;
  capitalized_name: string;
  names: Name[];
  region: Region;
}
