import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationArea } from '../models/location-areas';

@Injectable({
  providedIn: 'root',
})
export class PokemonLocationAreasService {
  constructor(private http: HttpClient) {}

  public findLocationByUrl(locationUrl: string): Observable<LocationArea> {
    return this.http.get<LocationArea>(locationUrl);
  }
}
