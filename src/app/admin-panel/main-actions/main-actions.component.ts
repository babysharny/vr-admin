import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-main-actions',
  templateUrl: 'main-actions.component.html',
  styleUrls: ['main-actions.component.css']
})
export class MainActionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  gg(){
    console.info('SET STATE HERE!');
    // let g = this.getSelectedGame();
    // console.info(g);
    // this.remote.startGame(g);
  }
}
