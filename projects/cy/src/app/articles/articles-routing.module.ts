import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticlesComponent} from './articles.component';
import {AddArticleComponent} from './add-article/add-article.component';


const routes: Routes = [
  // { path: '', redirectTo: 'lobby', pathMatch: 'full'},
  { path: '', component: ArticlesComponent},
  { path: 'addArticle', component: AddArticleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
