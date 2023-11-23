import { Routes } from '@angular/router';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonHabitatsComponent } from './components/pokemon-habitats/pokemon-habitats.component';
import { PokemonLocationsComponent } from './components/pokemon-locations/pokemon-locations.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: 'management',
    component: HomeComponent,
  },
  {
    path: 'locations',
    component: PokemonLocationsComponent,
  },
  {
    path: 'habitats',
    component: PokemonHabitatsComponent,
  },
  {
    path: 'detail/:id',
    component: PokemonDetailComponent,
  },
  { path: '', redirectTo: '/management', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];
