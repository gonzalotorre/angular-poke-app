import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonListingResponse } from '../models/api-responses';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private readonly URL_BASE = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  public findAllPokemons(
    offset?: number,
    limit?: number
  ): Observable<PokemonListingResponse> {
    return this.http.get<PokemonListingResponse>(
      `${this.URL_BASE}?offset=${offset}&limit=${limit}`
    );
  }

  public findPokemonByUrl(pokemonUrl: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(pokemonUrl);
  }

  public findPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.URL_BASE}${id}`);
  }
}
