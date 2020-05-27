import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ArticleStoreService} from '../article-store.service';
import {Article} from '../article';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddArticleComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder,
              public articleStore: ArticleStoreService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.myForm = this.fb.group({
      url: 'url',
      description: 'description',
      subject: 'subject',
      body: this.fb.array(['bbbbbbbbbbbbbbbb'])
    });
  }

  get bodyArray() {
    return this.myForm.get('body') as FormArray;
  }

  addRow() {
    this.bodyArray.push(new FormControl(''));
  }

  onSubmit() {
    this.articleStore.addArticle(this.myForm.value as Article);
  }

}
