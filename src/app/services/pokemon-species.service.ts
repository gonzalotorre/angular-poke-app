import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonSpecie } from '../models/pokemon-specie';

@Injectable({
  providedIn: 'root',
})
export class PokemonSpeciesService {
  private readonly URL_BASE = 'https://pokeapi.co/api/v2/pokemon-species';

  constructor(private http: HttpClient) {}

  public findSpecieByUrl(url: string): Observable<PokemonSpecie> {
    return this.http.get<PokemonSpecie>(`${url}`);
  }

  public findSpecieId(id: number): Observable<PokemonSpecie> {
    return this.http.get<PokemonSpecie>(`${this.URL_BASE}/${id}/`);
  }
}
