import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { forkJoin } from 'rxjs';
import { Pokedex, PokemonEntry } from '../../models/pokedex';
import { PokedexServiceService } from '../../services/pokedex-service.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pokemon-pokedex',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatExpansionModule,
    MatPaginatorModule,
  ],
  templateUrl: './pokemon-pokedex.component.html',
  styleUrl: './pokemon-pokedex.component.scss',
})
export class PokemonPokedexComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'actions'];

  dataSources: MatTableDataSource<PokemonEntry>[] = [];

  @ViewChildren(MatPaginator) paginators: QueryList<MatPaginator>;

  @ViewChildren(MatSort) sorts: QueryList<MatSort>;

  public allPokedex: Pokedex[] = [];

  private readonly LANGUAGE = 'en';

  constructor(private pokedexService: PokedexServiceService) {}

  ngOnInit(): void {
    this.getAllPokedex();
  }

  ngAfterViewInit() {
    this.dataSources.forEach((dataSource, index) => {
      dataSource.paginator = this.paginators.toArray()[index];
      dataSource.sort = this.sorts.toArray()[index];
    });
  }

  goToDetail(param: any) {}

  private getAllPokedex() {
    this.pokedexService.getAllPokedex(0, 30).subscribe({
      next: (pokedex) => {
        const obsevables = pokedex.results.map((result) => {
          return this.pokedexService.getPokedexByUrl(result.url);
        });

        forkJoin(obsevables).subscribe((pokedexArray) => {
          pokedexArray.forEach((pokedex) => {
            this.getEnglishNames(pokedex);
            const dataSource = new MatTableDataSource(pokedex.pokemon_entries);
            this.dataSources.push(dataSource);
          });
          this.allPokedex = pokedexArray;
          console.log(this.allPokedex);
        });
      },
    });
  }

  private getEnglishNames(pokedex: Pokedex): void {
    const englishName = pokedex.names.find(
      (name) => name.language.name === this.LANGUAGE
    );
    const englishDescription = pokedex.descriptions.find(
      (description) => description.language.name === this.LANGUAGE
    );
    pokedex.englishName = englishName?.name ?? '-';
    pokedex.englishDescription = englishDescription?.description ?? '-';
  }
}
