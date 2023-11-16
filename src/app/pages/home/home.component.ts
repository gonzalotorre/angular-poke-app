import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListingComponent } from '../../components/pokemon-listing/pokemon-listing.component';
import { PokemonFilterComponent } from '../../components/pokemon-filter/pokemon-filter.component';
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
  styleUrl: './home.component.css',
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
        pokemons.results.forEach((pokemon) => {
          this.findPokemon(pokemon.url);
        });
        this.isLoading = true;
      },
      complete: () => {
        this.isLoading = false;
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
