import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonLocationsService {
  private readonly URL_BASE = 'https://pokeapi.co/api/v2/location/';

  constructor(private http: HttpClient) {}
}
