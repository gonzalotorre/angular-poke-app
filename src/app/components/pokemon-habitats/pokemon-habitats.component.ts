import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonHabitatsService } from '../../services/pokemon-habitats.service';
import { forkJoin } from 'rxjs';
import { PokemonHabitatDetail } from '../../models/pokemon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pokemon-habitats',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, MatIconModule],
  templateUrl: './pokemon-habitats.component.html',
  styleUrl: './pokemon-habitats.component.scss',
})
export class PokemonHabitatsComponent {
  public listHabitats: PokemonHabitatDetail[] = [];

  constructor(private habitatsService: PokemonHabitatsService) {
    this.getHabitats();
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
