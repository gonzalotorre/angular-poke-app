export interface Language {
  name: string;
  url: string;
}

export interface EncounterMethod {
  name: string;
  url: string;
}

export interface Version {
  name: string;
  url: string;
}

export interface VersionDetails {
  max_chance: number;
  version: Version;
  encounter_details: EncounterDetails[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface Method {
  name: string;
  url: string;
}

export interface EncounterDetails {
  chance: number;
  condition_values: any[];
  max_level: number;
  method: Method;
  min_level: number;
}

export interface PokemonEncounter {
  pokemon: Pokemon;
  version_details: VersionDetails[];
  versions_chain: string;
}

export interface EncounterMethodRate {
  encounter_method: EncounterMethod;
  version_details: VersionDetails[];
}

export interface Location {
  name: string;
  url: string;
}

export interface Name {
  language: Language;
  name: string;
}

export interface LocationArea {
  encounter_method_rates: EncounterMethodRate[];
  game_index: number;
  id: number;
  location: Location;
  name: string;
  capitalized_name: string;
  names: Name[];
  pokemon_encounters: PokemonEncounter[];
}
