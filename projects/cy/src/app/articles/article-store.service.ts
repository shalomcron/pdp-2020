import {Injectable} from '@angular/core';
import {StateSubject} from 'shared-lib';
import {Articles} from './articles';
import {ArticleService} from './article.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleStoreService {
  $articles = new StateSubject<Articles>();

  constructor(private articleService: ArticleService) {
    articleService.getArticles().subscribe((articles: Articles) => {
      console.log('articles  --', articles);
      this.$articles.update(articles);
    });
  }

  get articles() {
    return this.$articles;
  }
}
