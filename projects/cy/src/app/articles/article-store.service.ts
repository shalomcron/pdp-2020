import {Injectable} from '@angular/core';
import {StateSubject} from 'shared-lib';
import {Articles} from './articles';
import {ArticleService} from './article.service';
import {Article} from './article';

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

  addArticle(value: Article) {
    // articleService.getArticles().subscribe((articles: Articles) => {
    //   console.log('articles  --', articles);
    //   this.$articles.update(articles);
    // });
    this.$articles.value.articles.push(value);
  }
}
