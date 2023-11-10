import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListingComponent } from '../../components/pokemon-listing/pokemon-listing.component';
import { PokemonFilterComponent } from '../../components/pokemon-filter/pokemon-filter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PokemonFilterComponent, PokemonListingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
