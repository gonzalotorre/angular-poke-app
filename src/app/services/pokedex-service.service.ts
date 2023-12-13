import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListingResponse } from '../models/api-responses';
import { Pokedex } from '../models/pokedex';

@Injectable({
  providedIn: 'root',
})
export class PokedexServiceService {
  private readonly URL_BASE = 'https://pokeapi.co/api/v2/pokedex/';

  constructor(private http: HttpClient) {}

  getAllPokedex(offset?: number, limit?: number): Observable<ListingResponse> {
    return this.http.get<ListingResponse>(
      `${this.URL_BASE}?offset=${offset}&limit=${limit}`
    );
  }

  getPokedexByUrl(url: string): Observable<Pokedex> {
    return this.http.get<Pokedex>(`${url}`);
  }
}
