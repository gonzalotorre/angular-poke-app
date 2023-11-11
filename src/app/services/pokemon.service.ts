import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonListingResponse } from '../models/api-responses';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private readonly URL_BASE = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  public findAllPokemons(offset?: number, limit?: number): Observable<PokemonListingResponse> {
    return this.http.get<PokemonListingResponse>(`${this.URL_BASE}?offset=${offset}&limit=${limit}`)
  }

  public findPokemon(pokemonUrl: string): Observable<any> {
    return this.http.get<any>(pokemonUrl)
  }

}
