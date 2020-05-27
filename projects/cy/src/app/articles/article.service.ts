import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {severUrl} from '../shared/config';
import {Article} from './article';
import {map} from 'rxjs/operators';

const articlesUrl = 'articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  getArticle(): Observable<Article> {
    return this.http.get(`${severUrl}/${articlesUrl}`).pipe(
      map(res => new Article(res))
    );
  }
}
