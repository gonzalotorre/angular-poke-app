import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { Pokemon } from '../../models/pokemon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-listing',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  templateUrl: './pokemon-listing.component.html',
  styleUrl: './pokemon-listing.component.scss',
})
export class PokemonListingComponent implements OnInit, AfterViewInit {
  @Input() pokedexList: Pokemon[] = [];
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
  }

  public goToDetail(id: number): void {
    this.router.navigateByUrl(`detail/${id}`);
  }
}
