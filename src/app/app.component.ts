import { Component } from '@angular/core';
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {HTTP_PROVIDERS} from "@angular/http";
import {GamesService} from "./games.service";
import {PlayersService} from "./players.service";

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
}
