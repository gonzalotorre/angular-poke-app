import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListingResponse } from '../models/api-responses';
import { PokemonsLocation } from '../models/location';

@Injectable({
  providedIn: 'root',
})
export class PokemonLocationsService {
  private readonly URL_BASE = 'https://pokeapi.co/api/v2/location/';

  constructor(private http: HttpClient) {}

  public findAllLocations(
    offset?: number,
    limit?: number
  ): Observable<ListingResponse> {
    return this.http.get<ListingResponse>(
      `${this.URL_BASE}?offset=${offset}&limit=${limit}`
    );
  }

  public findLocationByUrl(locationUrl: string): Observable<PokemonsLocation> {
    return this.http.get<PokemonsLocation>(locationUrl);
  }
}
