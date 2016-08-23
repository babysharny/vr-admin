import {Component, OnInit, Inject} from '@angular/core';
import {Player, SessionService} from "../../services/session.service";

@Component({
  moduleId: module.id,
  selector: 'app-player-login',
  templateUrl: 'player-login.component.html',
  styleUrls: ['player-login.component.css']
})
export class PlayerLoginComponent implements OnInit {

  player = new Player;

  constructor(
    @Inject(SessionService) private session: SessionService
  ) { }
  // isdsd: MaskedInput;
  ngOnInit() {

  }

  add() {
    console.log(this.player);
    this.session.addPlayer(this.player);
    this.session.startTimer();
    this.player = new Player;
  }
}
