import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-listing',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSortModule, MatProgressSpinnerModule, MatButtonModule, MatIconModule],
  templateUrl: './pokemon-listing.component.html',
  styleUrl: './pokemon-listing.component.css'
})
export class PokemonListingComponent implements OnInit {
  @Input() pokedexList: Pokemon[] = []

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['order', 'img', 'name', 'weight', 'height', 'actions'];
  
  public dataSource = new MatTableDataSource<Pokemon>();

  constructor() {}

  ngOnInit(): void {
    this.dataSource.data = this.pokedexList
    this.dataSource.sort = this.sort
  }

}
