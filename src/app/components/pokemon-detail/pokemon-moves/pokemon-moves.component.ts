import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { PokemonMove } from '../../../models/pokemon';
import { PokemonMoveDetail, Target } from '../../../models/pokemon-move';
import { PokemonMovesService } from '../../../services/pokemon-moves.service';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {
  MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER,
  MatTooltipModule,
} from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pokemon-moves',
  standalone: true,
  providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatTooltipModule,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './pokemon-moves.component.html',
  styleUrl: './pokemon-moves.component.scss',
})
export class PokemonMovesComponent implements OnInit {
  @Input() public pokemonMoves: PokemonMove[];

  public pokemonMovesList: PokemonMoveDetail[];

  private readonly LANGUAGE = 'en';

  constructor(private movesService: PokemonMovesService) {}

  ngOnInit(): void {
    this.findMoves();
  }

  /* openPokemonList(learned_by_pokemon: Target[]): void {
    console.log('Pokemons... ', learned_by_pokemon);
  } */

  private findMoves() {
    const observables = this.pokemonMoves.map((move) => {
      return this.movesService.findMoveByUrl(move.move.url);
    });
    forkJoin(observables).subscribe({
      next: (moves) => {
        moves.forEach((move) => {
          this.processMove(move);
        });
        this.pokemonMovesList = moves;
        console.log(this.pokemonMovesList);
      },
    });
  }

  private processMove(move: PokemonMoveDetail): void {
    const englishName = move.names.find(
      (name) => name.language.name === this.LANGUAGE
    );
    move.capitalized_name = englishName?.name ?? '-';
    move.short_description =
      move.effect_entries[0].effect.length < 200
        ? move.effect_entries[0].effect
        : `${move.effect_entries[0].effect.substring(0, 200)}...`;
  }
}
