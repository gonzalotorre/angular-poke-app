import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTabsModule],
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
        var typeNames = pokemon.types.map((type) => {
          return this.capitalizeFirstLetter(type.type.name);
        });
        pokemon.typesSecuence = typeNames.join(' | ');
        this.pokemon = pokemon;
      },
    });
  }

  private capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
