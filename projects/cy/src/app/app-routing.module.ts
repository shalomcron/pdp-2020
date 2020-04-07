import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'log-in', pathMatch: 'full'},
  { path: 'log-in', loadChildren: () => import('./log-in/log-in.module').then(m => m.LogInModule)},
  { path: 'personal-greeting', loadChildren: () =>
      import('./personal-greeting/personal-greeting.module.js').then(m => m.PersonalGreetingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
