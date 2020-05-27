import {Article} from './article';

export class Articles {
  articles: Article[];
  constructor(data: any) {
    Object.assign(this, data);
  }
}
