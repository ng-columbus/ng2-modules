import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeamComponent} from "./team.component";

export const teamRoutes: Routes = [
  {
    path: '',
    component: TeamComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(teamRoutes)],

  // export RouterModule so that companion modules have access to RouterModule directives without having to import them
  exports: [RouterModule]
})
export class TeamRoutingModule {}
