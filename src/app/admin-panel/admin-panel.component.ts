import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {GamesService} from "../services/games.service";
import {PlayersService} from "../services/players.service";
import {NgClass} from "@angular/common";
import {GamesGridComponent} from "./games-grid/games-grid.component";
import {MainActionsComponent} from "./main-actions/main-actions.component";
import {PlayerLoginComponent} from "./player-login/player-login.component";
import {StateInfoComponent} from "./state-info/state-info.component";
import {StateSwitchersComponent} from "./state-switchers/state-switchers.component";
import {SessionService} from "../services/session.service";

@Component({
  moduleId: module.id,
  selector: 'app-admin-panel',
  directives: [
    NgClass,
    PlayerLoginComponent,
    StateInfoComponent,
    StateSwitchersComponent,
    GamesGridComponent,
    MainActionsComponent
  ],
  encapsulation: ViewEncapsulation.None,
  providers: [SessionService],
  templateUrl: 'admin-panel.component.html',
  styleUrls: ['admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  @Input() data = {
    name: 'NEO',
    steamId: '13123123',
    remote: 'url',
  };

  bonuses: any;

  constructor(
    private games: GamesService,
    private remote: PlayersService
  ) { }

  ngOnInit() {
    this.games.updateForId(this.data.steamId, this.data.remote);
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



  startSteam(){
    this.remote.startSteam();
  }


}
