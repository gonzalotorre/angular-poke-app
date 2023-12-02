export interface Language {
  name: string;
  url: string;
}

export interface EffectEntry {
  effect: string;
  language: Language;
  short_effect: string;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: Language;
  version_group: {
    name: string;
    url: string;
  };
}

export interface Generation {
  name: string;
  url: string;
}

export interface NameEntry {
  language: Language;
  name: string;
}

export interface PokemonAbility {
  effect_changes: any[];
  effect_entries: EffectEntry[];
  flavor_text_entries: FlavorTextEntry[];
  generation: Generation;
  id: number;
  is_main_series: boolean;
  name: string;
  description: string;
  names: NameEntry[];
}
