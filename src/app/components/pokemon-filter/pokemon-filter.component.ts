import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PokemonTypesService } from '../../services/pokemon-types.service';
import { SimplePokemonTypeResponse } from '../../models/api-responses';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pokemon-filter',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule, MatCardModule],
  templateUrl: './pokemon-filter.component.html',
  styleUrl: './pokemon-filter.component.css'
})
export class PokemonFilterComponent implements OnInit {

  filterForm: FormGroup

  pokemonTypesList: SimplePokemonTypeResponse[] = []

  constructor(
    private typesService: PokemonTypesService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.getTypes()
    this.createForm()
  }

  search() {

  }

  private getTypes() {
    this.typesService.findAllPokemonTypes().subscribe({
      next: types => {
        this.pokemonTypesList = types.results
      }
    })
  }

  private createForm() {
    this.filterForm = this.formBuilder.group({
    })
  }

}
