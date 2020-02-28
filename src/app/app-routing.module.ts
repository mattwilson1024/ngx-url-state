import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExamplePageComponent } from './example-page/example-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/example', pathMatch: 'full' },
  { path: 'example', component: ExamplePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
