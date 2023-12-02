import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../models/pokemon';
import { PokemonSpeciesService } from '../../services/pokemon-species.service';
import { PokemonsService } from '../../services/pokemon.service';
import { PokemonEvolutionsComponent } from './pokemon-evolutions/pokemon-evolutions.component';
import { PokemonSpecie } from '../../models/pokemon-specie';
import { PokemonGamesComponent } from './pokemon-games/pokemon-games.component';
import { PokemonMovesComponent } from './pokemon-moves/pokemon-moves.component';
import { PokemonAbilitiesComponent } from './pokemon-abilities/pokemon-abilities.component';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    PokemonGamesComponent,
    PokemonEvolutionsComponent,
    PokemonMovesComponent,
    PokemonAbilitiesComponent,
  ],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss',
})
export class PokemonDetailComponent implements OnInit {
  public pokemon: Pokemon;

  public pokemonSpecie: PokemonSpecie;

  public pokemonId: number;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonsService,
    private pokemonSpecieService: PokemonSpeciesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => (this.pokemonId = param['id']));
    this.findPokemon();
  }

  private findPokemon() {
    this.pokemonService.findPokemonById(this.pokemonId).subscribe({
      next: (pokemon) => {
        var typeNames = pokemon?.types?.map((type) => {
          return this.capitalizeFirstLetter(type.type.name);
        });
        pokemon.typesSecuence = typeNames?.join(' | ');
        this.pokemon = pokemon;
        this.findSpecie(pokemon?.species?.url);
      },
    });
  }

  private findSpecie(specieUrl: string) {
    this.pokemonSpecieService.findSpecieByUrl(specieUrl).subscribe({
      next: (specie) => {
        this.pokemonSpecie = specie;
      },
    });
  }

  private capitalizeFirstLetter(text: string) {
    return text?.charAt(0).toUpperCase() + text.slice(1);
  }
}
