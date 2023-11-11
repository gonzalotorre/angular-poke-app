import { Pokemon } from "./pokemon";

export interface PokemonListingResponse {
    count: number;
    next: string;
    previous: string;
    results: Pokemon[];
}