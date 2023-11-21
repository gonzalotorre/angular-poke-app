import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { PokemonFilterComponent } from '../../components/pokemon-filter/pokemon-filter.component';
import { PokemonListingComponent } from '../../components/pokemon-listing/pokemon-listing.component';
import { Pokemon } from '../../models/pokemon';
import { PokemonsService } from '../../services/pokemon.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    PokemonFilterComponent,
    PokemonListingComponent,
    CommonModule,
    HomeComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  pokedexList: Pokemon[] = [];

  isLoading: boolean = true;

  private readonly pokemonListMaxSize = 1292;

  private readonly firstPokemons = 151;

  constructor(private pokemonsService: PokemonsService) {
    this.getPokemons(0, this.firstPokemons);
  }

  public sendNewRequest(length: number): void {
    this.getPokemons(length, length + 50);
  }

  private getPokemons(offset: number, length: number): void {
    console.log('getting pokemons');
    if (length <= this.pokemonListMaxSize) {
      this.pokemonsService.findAllPokemons(offset, length).subscribe({
        next: (pokemons) => {
          const pokemonObservables = pokemons.results.map((pokemon) => {
            return this.pokemonsService.findPokemonByUrl(pokemon.url);
          });

          forkJoin(pokemonObservables).subscribe((pokemonArray) => {
            const updatedPokedexList = [...this.pokedexList];

            pokemonArray.forEach((pokemon) => {
              this.processPokemon(pokemon);
              updatedPokedexList.push(pokemon);
            });

            this.pokedexList = updatedPokedexList;
            this.isLoading = false;
          });
        },
      });
    }
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
