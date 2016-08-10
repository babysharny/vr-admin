import { Component, OnInit } from '@angular/core';
import {GamesService} from "../games.service";
import {PlayersService} from "../players.service";

@Component({
  moduleId: module.id,
  selector: 'app-admin-panel',
  templateUrl: 'admin-panel.component.html',
  styleUrls: ['admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(
    private games: GamesService,
    private remote: PlayersService
  ) { }

  ngOnInit() {
    this.games.updateForId('steamId');
  }

  selectGame(game) {
    this.games.rightGrid.forEach(line => {
      line.forEach(g => {
        g.selected = false;
      })
    });
    game.selected = true;
  }

  getSelectedGame() {
    let res;
    this.games.rightGrid.forEach(line => {
      line.forEach(g => {
         if (g.selected === true) {
           res = g;
         }
      })
    })

    return res;
  }

  gg(){
    let g = this.getSelectedGame();
    console.info(g);
    this.remote.startGame(g);
  }

  startSteam(){
    this.remote.startSteam();
  }


}
