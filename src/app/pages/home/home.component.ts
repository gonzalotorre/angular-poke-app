import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { PokemonFilterComponent } from '../../components/pokemon-filter/pokemon-filter.component';
import { PokemonListingComponent } from '../../components/pokemon-listing/pokemon-listing.component';
import { Pokemon } from '../../models/pokemon';
import { PokemonsService } from '../../services/pokemon.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PokemonFilterComponent, PokemonListingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  pokedexList: Pokemon[] = [];

  isLoading: boolean = true;

  constructor(private pokemonsService: PokemonsService) {
    this.getPokemons();
  }

  private getPokemons(): void {
    this.pokemonsService.findAllPokemons(undefined, 151).subscribe({
      next: (pokemons) => {
        const pokemonObservables = pokemons.results.map((pokemon) => {
          return this.pokemonsService.findPokemonByUrl(pokemon.url);
        });

        forkJoin(pokemonObservables).subscribe((pokemonArray) => {
          pokemonArray.forEach((pokemon) => {
            this.processPokemon(pokemon);
          });

          this.isLoading = false;
        });
      },
    });
  }

  private processPokemon(pokemon: Pokemon): void {
    var typeNames = pokemon.types.map((type) => {
      return this.capitalizeFirstLetter(type.type.name);
    });
    pokemon.typesSecuence = typeNames.join(' | ');

    var abilities = pokemon.abilities.map((ability) => {
      return this.capitalizeFirstLetter(ability.ability.name);
    });
    pokemon.abilitiesSecuence = abilities.join(' | ');

    this.pokedexList.push(pokemon);
  }

  private capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
