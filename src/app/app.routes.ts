import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'management',
        component: HomeComponent,
    },
    {
        path: 'detail/:id',
        component: PokemonDetailComponent,
    },
];
