import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonHabitatsService } from '../../services/pokemon-habitats.service';
import { forkJoin } from 'rxjs';
import { PokemonHabitatDetail } from '../../models/pokemon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-habitats',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, MatIconModule],
  templateUrl: './pokemon-habitats.component.html',
  styleUrl: './pokemon-habitats.component.scss',
})
export class PokemonHabitatsComponent {
  public listHabitats: PokemonHabitatDetail[] = [];

  constructor(
    private habitatsService: PokemonHabitatsService,
    private router: Router
  ) {
    this.getHabitats();
  }

  public goToDetail(url: string): void {
    // Knowing that the url of the details only differs in the id at the end,
    // we can get it this way although it would not be the optimal way to do it.
    var partes = url.split('/');
    var idPokemon = partes[partes.length - 2];
    console.log(idPokemon);
    this.router.navigateByUrl(`detail/${idPokemon}`);
  }

  private getHabitats() {
    this.habitatsService.findAllHabitats().subscribe({
      next: (habitats) => {
        const habitatsObservables = habitats.results.map((habitat) => {
          return this.habitatsService.findHabitat(habitat.url);
        });

        forkJoin(habitatsObservables).subscribe((habitatsArray) => {
          this.listHabitats = habitatsArray;
        });
      },
    });
  }
}
