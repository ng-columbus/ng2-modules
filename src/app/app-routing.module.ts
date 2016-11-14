import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";

export const routes: Routes = [
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [HomeComponent],

  // export RouterModule so that companion modules have access to RouterModule directives without having to import them
  exports: [RouterModule]
})
export class AppRoutingModule {}
