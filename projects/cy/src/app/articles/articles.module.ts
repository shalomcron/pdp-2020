import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [ArticlesComponent, ListComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ]
})
export class ArticlesModule { }
