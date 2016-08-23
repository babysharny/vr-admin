import {Component, OnInit, Inject} from '@angular/core';
import {SessionService} from "../../services/session.service";
import {TimeLeftPipe} from "./pipes/time-left.pipe";

@Component({
  moduleId: module.id,
  selector: 'app-state-info',
  pipes: [TimeLeftPipe],
  templateUrl: 'state-info.component.html',
  styleUrls: ['state-info.component.css']
})
export class StateInfoComponent implements OnInit {

  timeModeLeft = false;

  constructor(
    @Inject(SessionService) private session: SessionService
  ) { }

  ngOnInit() {
    console.log(this.session.timer.moment);
  }

}
