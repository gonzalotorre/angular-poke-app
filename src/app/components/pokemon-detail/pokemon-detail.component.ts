import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss',
})
export class PokemonDetailComponent implements OnInit {
  public pokemon: Pokemon;

  private pokemonId: number;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonsService
  ) {
    this.route.params.subscribe((param) => (this.pokemonId = param['id']));
  }

  ngOnInit(): void {
    this.findPokemon();
  }

  private findPokemon() {
    this.pokemonService.findPokemonById(this.pokemonId).subscribe({
      next: (pokemon) => {
        this.pokemon = pokemon;
      },
    });
  }
}
