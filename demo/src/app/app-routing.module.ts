import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersPageComponent } from './characters/characters-page/characters-page.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/characters' },
  { path: 'characters', component: CharactersPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
