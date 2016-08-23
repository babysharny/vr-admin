import {Component, OnInit, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-games-grid',
  templateUrl: 'games-grid.component.html',
  styleUrls: ['games-grid.component.css']
})
export class GamesGridComponent implements OnInit {
  @Input() games: any;
  constructor() { }

  ngOnInit() {
  }

  selectGame(game) {
    this.games.rightGrid.forEach(line => {
      line.forEach(g => {
        g.selected = false;
      })
    });
    game.selected = true;
  }
}
