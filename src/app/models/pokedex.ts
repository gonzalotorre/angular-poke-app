export interface Language {
  name: string;
  url: string;
}

export interface Description {
  description: string;
  language: Language;
}

export interface Name {
  language: Language;
  name: string;
}

export interface PokemonSpecies {
  name: string;
  url: string;
}

export interface PokemonEntry {
  entry_number: number;
  pokemon_species: PokemonSpecies;
}

export interface Pokedex {
  descriptions: Description[];
  englishDescription: string;
  id: number;
  is_main_series: boolean;
  name: string;
  englishName: string;
  names: Name[];
  pokemon_entries: PokemonEntry[];
  region: null;
  version_groups: any[];
}
