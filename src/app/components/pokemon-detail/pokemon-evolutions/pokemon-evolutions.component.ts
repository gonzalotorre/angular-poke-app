import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { forkJoin, of, switchMap } from 'rxjs';
import {
  Evolution,
  PokemonEvolutionChain,
} from '../../../models/pokemon-evolution';
import { PokemonEvolutionsService } from '../../../services/pokemon-evolutions.service';
import { PokemonSpeciesService } from '../../../services/pokemon-species.service';
import { PokemonsService } from '../../../services/pokemon.service';
import { CombinedData } from '../../../models/combined-data';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-evolutions',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
  ],
  templateUrl: './pokemon-evolutions.component.html',
  styleUrl: './pokemon-evolutions.component.scss',
})
export class PokemonEvolutionsComponent implements OnInit {
  @Input() public pokemonEvolutionUrl: string;

  public evolutions: CombinedData[] = [];

  private pokemonEvolutions: Evolution[] = [];

  constructor(
    private evolutionService: PokemonEvolutionsService,
    private speciesService: PokemonSpeciesService,
    private pokemonService: PokemonsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEvolutionsByPokemonId();
  }

  public goToDetail(id: number): void {
    this.router.navigateByUrl(`detail/${id}`);
  }

  private getEvolutionsByPokemonId() {
    this.evolutionService.findSpecieByUrl(this.pokemonEvolutionUrl).subscribe({
      next: (evolutions) => {
        this.pokemonEvolutions = this.extractEvolutions(evolutions.chain);
        this.getSpecies();
      },
    });
  }

  private getSpecies() {
    const observables = this.pokemonEvolutions.map((element) => {
      return this.speciesService.findSpecieByUrl(element.url);
    });
    forkJoin(observables)
      .pipe(
        switchMap((pokemonSpecies) => {
          const pokemonIds = pokemonSpecies.map((species) => species.id);

          const additionalObservables = pokemonIds.map((id) =>
            forkJoin({
              pokemon: this.pokemonService.findPokemonById(id),
              pokemonSpecie: of(
                pokemonSpecies.find((species) => species.id === id)
              ),
            })
          );

          return forkJoin(additionalObservables);
        })
      )
      .subscribe((combinedData) => {
        this.evolutions = combinedData;
        this.evolutions = combinedData.map((data, index) => {
          // Asignar level_evolution al response del pokemon o del pokemonSpecie
          data.pokemon.level_evolution =
            this.pokemonEvolutions[index].level_evolution;
          data.pokemon.typesSecuence = data.pokemon.types
            .map(
              (type) =>
                type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)
            )
            .join(' | ');

          return data;
        });
      });
  }

  private extractEvolutions(chain: PokemonEvolutionChain): Evolution[] {
    const result: Evolution[] = [];

    if (chain.evolution_details.length > 0) {
      const evolutionDetails = chain.evolution_details[0];
      result.push({
        name: chain.species.name,
        url: chain.species.url,
        level_evolution: evolutionDetails.min_level,
      });
    }

    if (chain.evolves_to.length > 0) {
      for (const evolvesTo of chain.evolves_to) {
        result.push(...this.extractEvolutions(evolvesTo));
      }
    }

    return result;
  }
}
