import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  EventEmitter,
  SimpleChanges,
  Component,
  Input,
  OnInit,
  Output,
  OnChanges,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { Pokemon } from '../../models/pokemon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-pokemon-listing',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './pokemon-listing.component.html',
  styleUrl: './pokemon-listing.component.scss',
})
export class PokemonListingComponent
  implements OnInit, AfterViewInit, OnChanges
{
  @Output() pokemonsLength = new EventEmitter<number>();

  @Input() pokedexList: Pokemon[];
  @Input() isLoading = true;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    'order',
    'img',
    'name',
    'types',
    'abilities',
    'weight',
    'height',
    'actions',
  ];

  public dataSource = new MatTableDataSource<Pokemon>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.dataSource.data = this.pokedexList;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.paginator.page.subscribe((res) => {
      if (this.isLastPage(res)) {
        this.pokemonsLength.emit(res.length);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokedexList'].currentValue) {
      const newList = changes['pokedexList'].currentValue;
      this.dataSource.data = newList;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private isLastPage(event: any): boolean {
    const totalPages = Math.ceil(event.length / event.pageSize);
    // Verifica si la página actual es la última página
    return event.pageIndex === totalPages - 1;
  }

  public goToDetail(id: number): void {
    this.router.navigateByUrl(`detail/${id}`);
  }
}
