import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SessionService} from '../shared/session.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  encapsulation: ViewEncapsulation.None,
  /* changeDetection: ChangeDetectionStrategy.OnPush */
})
export class LogInComponent implements OnInit {
  myForm: FormGroup;
  loadDataOk = true;

  constructor(private fb: FormBuilder, private sessionService: SessionService) {
  }

  ngOnInit(): void {
    this.initForm();
    this.isLoggedInSubscribe();
  }

  private initForm() {
    this.myForm = this.fb.group({
      tz: ''
    });
  }

  onSubmit() {
    this.sessionService.logIn(this.myForm.get('tz').value);
  }

  private isLoggedInSubscribe() {
    this.sessionService.isLoggedIn.data$.subscribe(isOk => {
      if (isOk !== undefined) {
        this.loadDataOk = isOk;
      }
    });
  }
}
