import { Routes } from '@angular/router';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonHabitatsComponent } from './components/pokemon-habitats/pokemon-habitats.component';
import { PokemonLocationsComponent } from './components/pokemon-locations/pokemon-locations.component';
import { HomeComponent } from './pages/home/home.component';
import { PokemonPokedexComponent } from './components/pokemon-pokedex/pokemon-pokedex.component';

export const routes: Routes = [
  {
    path: 'pokemons',
    loadComponent: () =>
      import('./pages/home/home.component').then((mod) => mod.HomeComponent),
  },
  {
    path: 'locations',
    loadComponent: () =>
      import('./components/pokemon-locations/pokemon-locations.component').then(
        (mod) => mod.PokemonLocationsComponent
      ),
  },
  {
    path: 'habitats',
    loadComponent: () =>
      import('./components/pokemon-habitats/pokemon-habitats.component').then(
        (mod) => mod.PokemonHabitatsComponent
      ),
  },
  {
    path: 'pokedex',
    loadComponent: () =>
      import('./components/pokemon-pokedex/pokemon-pokedex.component').then(
        (mod) => mod.PokemonPokedexComponent
      ),
  },
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('./components/pokemon-detail/pokemon-detail.component').then(
        (mod) => mod.PokemonDetailComponent
      ),
  },
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/home/home.component').then((mod) => mod.HomeComponent),
  },
];
