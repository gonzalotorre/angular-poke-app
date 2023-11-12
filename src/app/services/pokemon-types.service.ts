import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonTypesResponse } from '../models/api-responses';

@Injectable({
    providedIn: 'root',
})
export class PokemonTypesService {
  private readonly URL_BASE = 'https://pokeapi.co/api/v2/type/';

  constructor(private http: HttpClient) {}

  public findAllPokemonTypes(): Observable<PokemonTypesResponse> {
    return this.http.get<PokemonTypesResponse>(`${this.URL_BASE}`)
  }

  public findPokemonType(pokemonTypeUrl: string): Observable<any> {
    return this.http.get<any>(pokemonTypeUrl)
  }

}
