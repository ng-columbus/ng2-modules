import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TeamComponent} from "./team.component";
import {TeamService} from "./team.service";
import {TeamRoutingModule} from "./team-routing.module";
import {SharedModule} from "../shared/shared.module";

/**
 * Feature module for Team class
 */
@NgModule({
  imports: [
    CommonModule,  // This module contains default directives provided by angular (NgIf, NgStyle, etc)
    TeamRoutingModule,
    SharedModule
  ],
  declarations: [TeamComponent],
  exports: [TeamComponent],
  providers: [TeamService]
})
export class TeamModule { }
