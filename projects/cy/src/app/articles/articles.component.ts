import { Component, OnInit } from '@angular/core';
import {ArticleStoreService} from './article-store.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  constructor(public articleStore: ArticleStoreService) { }

  ngOnInit(): void {
  }

}
