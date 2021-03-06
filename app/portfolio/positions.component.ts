import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { StocksService } from '../stocks.service';
import { GameComponent } from '../game/game.component';

@Component({
  moduleId: module.id,
  selector: 'tradity-positions',
  templateUrl: 'positions.component.html'
})
export class PositionsComponent implements OnInit {
  positions: Observable<any>;
  
  constructor(private stocksService: StocksService, private gameComponent: GameComponent) { }

  ngOnInit() {
    this.gameComponent.heading1 = 'Positions';
    this.positions = this.stocksService.positions;
  }
}