import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LocationsComponent } from './components/locations/locations.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonHabitatsComponent } from './components/pokemon-habitats/pokemon-habitats.component';

export const routes: Routes = [
  {
    path: 'management',
    component: HomeComponent,
  },
  {
    path: 'locations',
    component: LocationsComponent,
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
