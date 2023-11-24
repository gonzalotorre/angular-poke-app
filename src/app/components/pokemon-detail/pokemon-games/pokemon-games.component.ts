import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameIndice } from '../../../models/game-indices';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-pokemon-games',
  standalone: true,
  imports: [CommonModule, MatListModule, MatGridListModule],
  templateUrl: './pokemon-games.component.html',
  styleUrl: './pokemon-games.component.scss',
})
export class PokemonGamesComponent {
  @Input() public games: GameIndice[];
}
