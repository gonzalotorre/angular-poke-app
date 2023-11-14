import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LocationsComponent } from './components/locations/locations.component';

export const routes: Routes = [
  {
    path: 'management',
    component: HomeComponent,
  },
  {
    path: 'locations',
    component: LocationsComponent,
  },
  { path: '', redirectTo: '/management', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];
