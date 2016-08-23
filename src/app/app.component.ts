import { Component } from '@angular/core';
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {HTTP_PROVIDERS} from "@angular/http";
import {GamesService} from "./services/games.service";
import {PlayersService} from "./services/players.service";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  providers: [HTTP_PROVIDERS, GamesService, PlayersService],
  directives: [AdminPanelComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!!!';
  session = {

    players: [
      {
        name: 'neo',
        phone: '+7231321'
      },
      {
        name: 'neo',
        phone: '+7231321'
      }
    ],
    state: 'started',
    // state: 'stop',
    // state: 'started',
    time: 123,
    price: 1000,
    pc: {
      url: '',
      steamId: 'sadsa'
    }
  };

  ggStates = [
    'pause',
    'stop'
  ]
  data = [
    {
      name: 'left',
      steamId: 'id 1',
      state: ''
    },
    {
      name: 'right',
      steamId: 'id 2'
    }
  ]
}
