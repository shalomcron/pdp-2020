import { Injectable } from '@angular/core';
import {Article} from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleStoreService {
  $articles: Article[];

  constructor() { }

  get articles() {
    return this.$articles;
  }
}
