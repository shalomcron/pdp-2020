import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'log-in', pathMatch: 'full'},
  { path: 'log-in', loadChildren: () => import('./log-in/log-in.module').then(m => m.LogInModule)},
  { path: 'articles', loadChildren: () =>
      import('./articles/articles.module').then(m => m.ArticlesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
