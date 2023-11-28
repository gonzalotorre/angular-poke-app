import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonMoveDetail } from '../models/pokemon-move';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonMovesService {
  constructor(private http: HttpClient) {}

  public findMoveByUrl(url: string): Observable<PokemonMoveDetail> {
    return this.http.get<PokemonMoveDetail>(`${url}`);
  }
}
