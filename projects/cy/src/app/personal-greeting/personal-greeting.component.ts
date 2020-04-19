import { Component, OnInit } from '@angular/core';
import {SessionService} from '../shared/session.service';

@Component({
  selector: 'app-personal-greeting',
  templateUrl: './personal-greeting.component.html',
  styleUrls: ['./personal-greeting.component.scss']
})
export class PersonalGreetingComponent implements OnInit {
  public tz: string;
  public name: string;

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.tz = this.sessionService.geTz();
    this.name = this.sessionService.geName();
  }

}
