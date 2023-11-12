import { Pokemon } from "./pokemon";

export interface PokemonListingResponse {
    count: number;
    next: string;
    previous: string;
    results: Pokemon[];
}

export interface PokemonTypesResponse {
    count: number;
    next: string;
    previous: string;
    results: SimplePokemonTypeResponse[];
}

export interface SimplePokemonTypeResponse {
    name: string;
    url: string;
}