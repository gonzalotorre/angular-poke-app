import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
    
    private readonly URL_BASE = 'https://pokeapi.co/api/v2/pokemon/'
    
    constructor(private http: HttpClient) { }

    public findAllPokemons(): Observable<any> {
        return this.http.get<any>(`${this.URL_BASE}`)
    }

}