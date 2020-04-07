import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.myForm = this.fb.group({
      tz: ''
    });
  }

  onSubmit() {
    this.router.navigate(['/personal-greeting']);
  }
}
