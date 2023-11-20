import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LocationsComponent } from './components/locations/locations.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

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
    path: 'detail/:id',
    component: PokemonDetailComponent,
  },
  { path: '', redirectTo: '/management', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];
