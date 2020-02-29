import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExamplePageComponent } from './example-page/example-page.component';
import { SecondPageComponent } from './second-page/second-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/example', pathMatch: 'full' },
  { path: 'example', component: ExamplePageComponent },
  { path: 'second', component: SecondPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
