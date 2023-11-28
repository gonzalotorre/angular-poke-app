export interface ContestEffect {
  url: string;
}

export interface ContestType {
  name: string;
  url: string;
}

export interface DamageClass {
  name: string;
  url: string;
}

export interface Language {
  name: string;
  url: string;
}

export interface VersionGroup {
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
  version_group: VersionGroup;
}

export interface Machine {
  url: string;
}

export interface MachineEntry {
  machine: Machine;
  version_group: VersionGroup;
}

export interface Ailment {
  name: string;
  url: string;
}

export interface Category {
  name: string;
  url: string;
}

export interface Meta {
  ailment: Ailment;
  ailment_chance: number;
  category: Category;
  crit_rate: number;
  drain: number;
  flinch_chance: number;
  healing: number;
  max_hits: null;
  max_turns: null;
  min_hits: null;
  min_turns: null;
  stat_chance: number;
}

export interface LanguageName {
  language: Language;
  name: string;
}

export interface PastValue {
  accuracy: number;
  effect_chance: null;
  effect_entries: any[];
  power: null;
  pp: null;
  type: null;
  version_group: VersionGroup;
}

export interface Target {
  name: string;
  url: string;
}

export interface Type {
  name: string;
  url: string;
}

export interface PokemonMoveDetail {
  accuracy: number;
  contest_combos: null;
  contest_effect: ContestEffect;
  contest_type: ContestType;
  damage_class: DamageClass;
  effect_chance: null;
  effect_changes: any[];
  effect_entries: EffectEntry[];
  short_description: string;
  flavor_text_entries: FlavorTextEntry[];
  generation: {
    name: string;
    url: string;
  };
  id: number;
  learned_by_pokemon: Target[];
  machines: MachineEntry[];
  meta: Meta;
  name: string;
  capitalized_name: string;
  names: LanguageName[];
  past_values: PastValue[];
  power: number;
  pp: number;
  priority: number;
  stat_changes: any[];
  super_contest_effect: {
    url: string;
  };
  target: Target;
  type: Type;
}
