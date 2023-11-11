import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { PokemonsService } from './services/pokemon.service';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    PokemonsService,
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
