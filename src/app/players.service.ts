import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class PlayersService {

  constructor(
    private http: Http
  ) { }

  startSteam() {
    console.log("start steam signal here");
  }

  startGame(game) {
    let host = '192.168.1.65:8080';
    // let host = 'localhost:8080';
    // let url = `http://${host}/1/employees/${game.appID}?secret_admin=boilerplatesRock`;
    let url = `http://${host}/1/steam?cmd="steam://run/${game.appID}"`;
    // let url = `http://localhost:8080/1/employees`;
    console.info('START GAME ', game);
    console.info(url);
    this.http.get(url)
      .subscribe(
        x => {
          console.log(x);
        }
      )
  }

}
