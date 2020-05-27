import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HTTP_OPTIONS, severUrl} from '../shared/config';
import {map} from 'rxjs/operators';
import {Articles} from './articles';

const articlesUrl = 'articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  getArticles(): Observable<Articles> {
    return this.http.get(`${severUrl}/${articlesUrl}`, HTTP_OPTIONS).pipe(
      map(res => new Articles(res))
    );
  }
}
