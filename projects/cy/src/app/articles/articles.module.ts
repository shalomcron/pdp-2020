import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ArticlesComponent, AddArticleComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    ReactiveFormsModule
  ]
})
export class ArticlesModule { }
