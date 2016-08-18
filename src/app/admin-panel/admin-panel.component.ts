import {Component, OnInit, Input} from '@angular/core';
import {GamesService} from "../games.service";
import {PlayersService} from "../players.service";
import {NgClass} from "@angular/common";

@Component({
  moduleId: module.id,
  selector: 'app-admin-panel',
  directives: [NgClass],
  templateUrl: 'admin-panel.component.html',
  styleUrls: ['admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  @Input() data = {
    name: 'NEO',
    steamId: '13123123',
    remote: 'url',
  };

  minutes = 15;
  bonuses: any;

  constructor(
    private games: GamesService,
    private remote: PlayersService
  ) { }

  ngOnInit() {
    this.games.updateForId(this.data.steamId, this.data.remote);
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

  setTime(min: number) {
    this.minutes = min;
  }
}
