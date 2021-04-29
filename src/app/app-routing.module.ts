import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ParcoursComponent} from './centre/parcours/parcours.component';
import {PageNotFoundComponent} from './centre/page-not-found/page-not-found.component';
export const components = [ParcoursComponent];
const routes: Routes = [
  {path: '' , component: PageNotFoundComponent},
  {path: 'parcours' , component: components[0]},
  {path: '**' , component: PageNotFoundComponent},
];

@NgModule({
  imports:  [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
