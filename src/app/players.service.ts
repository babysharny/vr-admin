import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class PlayersService {

  constructor(
    private http: Http
  ) { }

  startSteam() {

  }

  startGame(game) {
    let url = `http://localhost:8080/1/employees/${game.appID}?secret_admin=boilerplatesRock`;
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
