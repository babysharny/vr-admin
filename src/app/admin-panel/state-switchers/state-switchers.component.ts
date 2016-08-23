import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../services/session.service";

@Component({
  moduleId: module.id,
  selector: 'app-state-switchers',
  templateUrl: 'state-switchers.component.html',
  styleUrls: ['state-switchers.component.css']
})
export class StateSwitchersComponent implements OnInit {

  constructor(
    private session: SessionService
  ) { }

  ngOnInit() {
  }

  setTime(minutes: number) {
    this.session.minutes = minutes;
  }
}
