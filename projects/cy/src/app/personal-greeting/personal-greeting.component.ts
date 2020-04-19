import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SessionService} from '../shared/session.service';

@Component({
  selector: 'app-personal-greeting',
  templateUrl: './personal-greeting.component.html',
  styleUrls: ['./personal-greeting.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalGreetingComponent implements OnInit {
  constructor(public sessionService: SessionService) { }

  ngOnInit(): void {
  }

}
