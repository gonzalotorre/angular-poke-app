import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { PokemonsService } from './services/pokemon.service';
import { PokemonTypesService } from './services/pokemon-types.service';
import { PokemonHabitatsService } from './services/pokemon-habitats.service';
import { PokemonEvolutionsService } from './services/pokemon-evolutions.service';
import { PokemonSpeciesService } from './services/pokemon-species.service';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    PokemonsService,
    PokemonTypesService,
    PokemonSpeciesService,
    PokemonHabitatsService,
    PokemonEvolutionsService,
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
