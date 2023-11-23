import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonHabitat, PokemonHabitatDetail } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonHabitatsService {
  private readonly URL_BASE = 'https://pokeapi.co/api/v2/pokemon-habitat/';

  constructor(private http: HttpClient) {}

  public findAllHabitats(): Observable<PokemonHabitat> {
    return this.http.get<PokemonHabitat>(this.URL_BASE);
  }

  public findHabitat(url: string): Observable<PokemonHabitatDetail> {
    return this.http.get<PokemonHabitatDetail>(url);
  }
}
