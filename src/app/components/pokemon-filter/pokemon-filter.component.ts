import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PokemonTypesService } from '../../services/pokemon-types.service';
import { SimplePokemonTypeResponse } from '../../models/api-responses';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pokemon-filter',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './pokemon-filter.component.html',
  styleUrl: './pokemon-filter.component.css',
})
export class PokemonFilterComponent implements OnInit {
  filterForm: FormGroup;

  pokemonTypesList: SimplePokemonTypeResponse[] = [];

  constructor(
    private typesService: PokemonTypesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getTypes();
    this.createForm();
  }

  search() {}

  private getTypes() {
    this.typesService.findAllPokemonTypes().subscribe({
      next: (types) => {
        this.pokemonTypesList = types.results.map((type) => ({
          name: this.capitalizeFirstLetter(type.name),
          url: type.url,
        }));
      },
    });
  }

  private createForm() {
    this.filterForm = this.formBuilder.group({});
  }

  private capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
