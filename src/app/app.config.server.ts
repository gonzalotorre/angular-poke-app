import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { PokemonsService } from './services/pokemon.service';
import { PokemonTypesService } from './services/pokemon-types.service';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    PokemonsService,
    PokemonTypesService,
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
