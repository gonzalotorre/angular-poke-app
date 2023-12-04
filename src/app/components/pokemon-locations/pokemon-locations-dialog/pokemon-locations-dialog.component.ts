import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { forkJoin } from 'rxjs';
import { LocationArea } from '../../../models/location-areas';
import { GenericResponse } from '../../../models/pokemon';
import { PokemonLocationAreasService } from '../../../services/pokemon-location-areas.service';

@Component({
  selector: 'app-pokemon-locations-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatExpansionModule,
    MatTabsModule,
    MatListModule,
    MatChipsModule,
    MatDialogModule,
  ],
  templateUrl: './pokemon-locations-dialog.component.html',
  styleUrl: './pokemon-locations-dialog.component.scss',
})
export class PokemonLocationsDialogComponent implements OnInit {
  public displayedColumns: string[] = ['pokemon', 'versionDetails'];

  public locationAreas: LocationArea[];

  private readonly LANGUAGE = 'en';

  constructor(
    public dialogRef: MatDialogRef<PokemonLocationsDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { areas: GenericResponse[]; locationName: string },
    private locationAreaService: PokemonLocationAreasService
  ) {}

  ngOnInit(): void {
    this.findLocationAreas();
  }

  private findLocationAreas() {
    const observables = this.data.areas.map((element) => {
      return this.locationAreaService.findLocationByUrl(element.url);
    });
    forkJoin(observables).subscribe((areasArray) => {
      areasArray.forEach((area) => {
        this.processLocation(area);
      });
      console.log(areasArray);
      this.locationAreas = areasArray;
    });
  }

  private processLocation(location: LocationArea): void {
    const englishName = location.names.find(
      (name) => name.language.name === this.LANGUAGE
    );
    location.capitalized_name = englishName?.name ?? '-';
  }
}
