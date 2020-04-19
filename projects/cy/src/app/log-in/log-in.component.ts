import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {SessionService} from '../shared/session.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  myForm: FormGroup;
  loadDataOk = true;

  constructor(private fb: FormBuilder, private router: Router, private sessionService: SessionService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.myForm = this.fb.group({
      tz: ''
    });
  }

  onSubmit() {
    this.sessionService.setTz(this.myForm.get('tz').value).subscribe(loadDataOk => {
      this.loadDataOk = loadDataOk;
      if (loadDataOk) {
        this.router.navigate(['/personal-greeting']);
      }
    });

    this.sessionService.logIn(this.myForm.get('tz').value);

  }
}
