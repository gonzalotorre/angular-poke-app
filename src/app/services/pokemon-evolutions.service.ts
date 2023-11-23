import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  PokemonEvolution,
  PokemonEvolutionsResponse,
} from '../models/pokemon-evolution';

@Injectable({
  providedIn: 'root',
})
export class PokemonEvolutionsService {
  private readonly URL_BASE = 'https://pokeapi.co/api/v2/evolution-chain';

  constructor(private http: HttpClient) {}

  public findAllEvolutions(): Observable<PokemonEvolutionsResponse> {
    return this.http.get<PokemonEvolutionsResponse>(this.URL_BASE);
  }

  public findEvolutionById(id: number): Observable<PokemonEvolution> {
    return this.http.get<PokemonEvolution>(`${this.URL_BASE}/${id}/`);
  }

  public findSpecieByUrl(url: string): Observable<PokemonEvolution> {
    return this.http.get<PokemonEvolution>(`${url}`);
  }
}
