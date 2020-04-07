import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonalGreetingComponent} from './personal-greeting.component';


const routes: Routes = [
  { path: '', component: PersonalGreetingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalGreetingRoutingModule { }
