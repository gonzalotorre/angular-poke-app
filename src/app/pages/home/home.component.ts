import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListingComponent } from '../../components/pokemon-listing/pokemon-listing.component';
import { PokemonFilterComponent } from '../../components/pokemon-filter/pokemon-filter.component';
import { Pokemon } from '../../models/pokemon';
import { PokemonsService } from '../../services/pokemon.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PokemonFilterComponent, PokemonListingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  pokedexList: Pokemon[] = [];

  constructor(private pokemonsService: PokemonsService) {
    this.getPokemons();
  }

  private getPokemons(): void {
    this.pokemonsService.findAllPokemons(undefined, 151).subscribe({
      next: (pokemons) => {
        pokemons.results.forEach((pokemon) => {
          this.findPokemon(pokemon.url);
        });
      },
    });
  }

  private findPokemon(pokrmonUrl: string): void {
    this.pokemonsService.findPokemon(pokrmonUrl).subscribe({
      next: (pokemon) => {
        var typeNames = pokemon.types.map((type) => {
          return this.capitalizeFirstLetter(type.type.name);
        });
        pokemon.typesSecuence = typeNames.join(' | ');
        var abilities = pokemon.abilities.map((ability) => {
          return this.capitalizeFirstLetter(ability.ability.name);
        });
        pokemon.abilitiesSecuence = abilities.join(' | ');
        this.pokedexList.push(pokemon);
      },
    });
  }

  private capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
