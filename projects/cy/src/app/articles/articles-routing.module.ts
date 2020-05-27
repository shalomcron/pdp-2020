import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticlesComponent} from './articles.component';
import {ListComponent} from './list/list.component';


const routes: Routes = [
  // { path: '', redirectTo: 'lobby', pathMatch: 'full'},
  { path: '', component: ArticlesComponent},
  { path: 'list', component: ListComponent},
  { path: '**', component: ListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
