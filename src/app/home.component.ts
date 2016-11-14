import {Component} from '@angular/core';
// import {TeamService} from "./team/team.service";

@Component({
  selector: 'ngc-home',
  template: `
              <h2>
                Home Content
              </h2>
              `
})
export class HomeComponent {

  /**
   * Note below that even though the AppModule didn't declare TeamService a provider, it is
   * available from the root injector
   */
  // constructor(private teamService: TeamService) {
  //   console.log('constructing HomeComponent, injecting teamService', this.teamService);
  // }


}
