import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { forkJoin } from 'rxjs';
import { PokemonsLocation } from '../../models/location';
import { GenericResponse } from '../../models/pokemon';
import { PokemonLocationsService } from '../../services/pokemon-locations.service';
import { PokemonLocationsDialogComponent } from './pokemon-locations-dialog/pokemon-locations-dialog.component';

@Component({
  selector: 'app-pokemon-locations',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './pokemon-locations.component.html',
  styleUrl: './pokemon-locations.component.scss',
})
export class PokemonLocationsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'region', 'areas'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private locationsList: PokemonsLocation[] = [];

  private readonly LANGUAGE = 'en';

  private readonly FIRST_LOCATIONS = 100;

  private readonly TOTAL_LOCATIONS = 850;

  constructor(
    private locationsService: PokemonLocationsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getLocations(0, this.FIRST_LOCATIONS);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator.page.subscribe((res) => {
      if (this.isLastPage(res)) {
        this.getLocations(res.length + 5, 5);
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialogAreas(areas: GenericResponse[], locationName: string) {
    const dialogRef = this.dialog.open(PokemonLocationsDialogComponent, {
      data: {
        areas,
        locationName,
      },
    });

    dialogRef.afterClosed().subscribe();
  }

  private isLastPage(event: any): boolean {
    const totalPages = Math.ceil(event.length / event.pageSize);
    return event.pageIndex === totalPages - 1;
  }

  private getLocations(offset: number, limit: number) {
    if (limit <= this.TOTAL_LOCATIONS) {
      this.locationsService.findAllLocations(offset, limit).subscribe({
        next: (locationListing) => {
          const locationsObservables = locationListing.results.map(
            (location) => {
              return this.locationsService.findLocationByUrl(location.url);
            }
          );

          forkJoin(locationsObservables).subscribe((locationsArray) => {
            const updatedLocationsList = [...this.locationsList];
            console.log(locationsArray);

            locationsArray.forEach((location) => {
              this.processLocation(location);
              updatedLocationsList.push(location);
              this.locationsList.push(location);
            });
            this.dataSource.data = updatedLocationsList;
          });
        },
      });
    }
  }

  private processLocation(location: PokemonsLocation): void {
    const englishName = location.names.find(
      (name) => name.language.name === this.LANGUAGE
    );
    location.capitalized_name = englishName?.name ?? '-';
  }
}
