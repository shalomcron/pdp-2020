import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.myForm = this.fb.group({
      url: '',
      description: '',
      subject: '',
      body: this.fb.array(['AAA'])
    });

/*
  url: string;
  description: string;
  subject: string;
  body: string[];

 */
  }

  onSubmit() {
  }

}
