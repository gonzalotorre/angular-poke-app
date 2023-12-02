import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonAbility } from '../models/pokemon-ability';

@Injectable({
  providedIn: 'root',
})
export class PokemonAbilitiesService {
  constructor(private http: HttpClient) {}

  public findAbilitieByUrl(url: string): Observable<PokemonAbility> {
    return this.http.get<PokemonAbility>(url);
  }
}
