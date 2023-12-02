import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MAT_SELECT_SCROLL_STRATEGY_PROVIDER } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER } from '@angular/material/tooltip';
import { forkJoin } from 'rxjs';
import { PokemonAbilities } from '../../../models/pokemon';
import { PokemonAbility } from '../../../models/pokemon-ability';
import { PokemonAbilitiesService } from '../../../services/pokemon-abilities.service';

@Component({
  selector: 'app-pokemon-abilities',
  standalone: true,
  providers: [
    MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER,
    MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
  ],
  imports: [CommonModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './pokemon-abilities.component.html',
  styleUrl: './pokemon-abilities.component.scss',
})
export class PokemonAbilitiesComponent implements OnInit, AfterViewInit {
  @Input() public pokemonAbilities: PokemonAbilities[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'name', 'description', 'generation'];

  dataSource: MatTableDataSource<PokemonAbility> =
    new MatTableDataSource<PokemonAbility>();

  private readonly LANGUAGE = 'en';

  constructor(private pokemonAbilitiesService: PokemonAbilitiesService) {}

  ngOnInit(): void {
    this.getAbilities();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private getAbilities(): void {
    const observables = this.pokemonAbilities.map((element) => {
      return this.pokemonAbilitiesService.findAbilitieByUrl(
        element.ability.url
      );
    });

    forkJoin(observables).subscribe({
      next: (abilities) => {
        abilities.forEach((ability) => {
          this.processAbility(ability);
        });
        this.dataSource.data = abilities;
      },
    });
  }

  private processAbility(ability: PokemonAbility) {
    const englishName = ability.effect_entries.find(
      (entry) => entry.language.name === this.LANGUAGE
    );
    ability.description = englishName?.short_effect ?? '-';
  }
}
