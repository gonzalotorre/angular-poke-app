import { Component, Inject, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { PokemonsService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-listing',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './pokemon-listing.component.html',
  styleUrl: './pokemon-listing.component.css'
})
export class PokemonListingComponent {
  displayedColumns: string[] = ['id', 'name', 'weight', 'height'];
  
  dataSource = new MatTableDataSource<Pokemon>();

  constructor(
    private pokemonsService: PokemonsService, 
  ) {
    this.getPokemons()
  }

  private getPokemons(): void {
    this.pokemonsService.findAllPokemons().subscribe({
      next: pokemons => {
        this.dataSource.data = pokemons.results
        console.log(pokemons)
      }
    })
  }

}
